import { Handler } from "../handler";
import { IPostgresModelClass, IUser, PostgresModel } from "ts-postgres-model";
import { FetchObject } from "./fetch-object";
import { Transaction } from "knex";

export class CreateObjectFromJson<T extends PostgresModel<T>> extends Handler {

  constructor(private model: IPostgresModelClass<T>, private jsonObject: any, private requestingUser: IUser, private transaction?: Transaction, private populationString?: string){
    super();

    this.jsonObject = jsonObject || {};
  }

  run(): Promise<T> {

    const object = new this.model();

    return Promise.resolve()
    .then(() => {
      if (this.transaction) {
        return object.updateWithParams(this.jsonObject, this.requestingUser);
      } else {
        return object.updateWithParams(this.jsonObject, this.requestingUser, {transacting: this.transaction});
      }
    })
    .then(savedObject => {
      if (this.populationString === undefined) {
        return Promise.resolve(savedObject);
      } else {
        return new FetchObject(this.requestingUser, this.model, this.jsonObject.id, true, this.populationString).run();
      }
    });
  }
}
