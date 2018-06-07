import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import { IUserRequest } from "../../IUserRequest";
import { Handler } from "../handler";

export class GetAllObjectsHandler<T extends PostgresModel<T>> extends Handler {

  constructor(private req: IUserRequest, private model: IPostgresModelClass<T>, private fetchParams: any, private allowDeleted: boolean | undefined){
    super()
  }

  run() {
    const query = this.allowDeleted ? {} : {deleted: false};
    return new this.model().where(query).fetchAllForUser(this.req.user, this.fetchParams)
    .then(objects => {
      return Promise.resolve(objects.toJSON());
    });
  }
}
