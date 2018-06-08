import { Handler } from "../handler";
import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import { IUserRequest } from "../../IUserRequest";
import { FetchObject } from "./fetch-object";
import { Transaction } from "knex";

export class CreateObjectFromJson<T extends PostgresModel<T>> extends Handler {

  constructor(private model: IPostgresModelClass<T>, private jsonObject: any, private req: IUserRequest, private transaction?: Transaction){
    super();

    this.jsonObject = jsonObject || {};
  }

  run(): Promise<T> {

    const object = new this.model();

    return Promise.resolve()
    .then(() => {
      if (this.transaction) {
        return object.updateWithParams(this.jsonObject, this.req.user);
      } else {
        return object.updateWithParams(this.jsonObject, this.req.user, {transacting: this.transaction});
      }
    })
    .then(savedObject => {
      if (this.req.query.p === undefined) {
        return Promise.resolve(savedObject);
      } else {
        return new FetchObject(this.req, this.model, this.jsonObject.id, true).run();
      }
    });
  }
}
