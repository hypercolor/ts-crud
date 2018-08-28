import { Handler } from "../handler";
import { IPostgresModelClass, IUser, PostgresModel } from "ts-postgres-model";
import { Transaction } from "knex";
import { CreateObjectFromJson } from "./create-object-from-json";
import { FetchObject } from "./fetch-object";

export enum EUpdateType {
  PUT,
  PATCH
}

export class UpdateObjectFromJson<T extends PostgresModel<T>> extends Handler {


  constructor(private model: IPostgresModelClass<T>, private jsonObject: any, private requestingUser: IUser, private updateType: EUpdateType, private transaction?: Transaction, private populationString?: string) {
    super()
  }

  run(): Promise<T> {
    if (this.jsonObject.id === undefined || this.jsonObject.id === '') {
      return new CreateObjectFromJson(this.model, this.jsonObject, this.requestingUser, this.transaction, this.populationString).run();
    } else {
      return new FetchObject(this.requestingUser, this.model, this.jsonObject.id, false).run()
      .then((object: T) => {
        if (object === null) {
          return Promise.reject({code: 404, error: this.model.instanceName + ' not found: ' + this.jsonObject.id});
        } else {

          // For PUT requests, we want to clear out any existing data, then update from the request
          if (this.updateType === EUpdateType.PUT) {
            Object.values(object.columns).forEach(columnName => {
              delete object[columnName];
            });
          }

          if (this.transaction){
            return object.updateWithParams(this.jsonObject, this.requestingUser, {transacting: this.transaction});
          } else {
            return object.updateWithParams(this.jsonObject, this.requestingUser);
          }
        }
      })
      .then((object: T) => {
        if (this.populationString === undefined) {
          return Promise.resolve(object);
        } else {
          return new FetchObject(this.requestingUser, this.model, this.jsonObject.id, true, this.populationString).run();
        }
      });
    }
  }

}
