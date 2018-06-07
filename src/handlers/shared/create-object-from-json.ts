import { Handler } from "../handler";
import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import { IUserRequest } from "../../IUserRequest";
import { FetchObject } from "./fetch-object";

export class CreateObjectFromJson<T extends PostgresModel<T>> extends Handler {

  constructor(private model: IPostgresModelClass<T>, private jsonObject: any, private req: IUserRequest){
    super();

    this.jsonObject = jsonObject || {};
  }

  run() {

    const object = new this.model();
    return object.updateWithParams(this.jsonObject, this.req.user)
    .then(savedObject => {
      if (this.req.query.p === undefined) {
        return Promise.resolve(savedObject);
      } else {
        return new FetchObject(this.req, this.model, this.jsonObject.id, true).run();
      }
    });
  }
}
