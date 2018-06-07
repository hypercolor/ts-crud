

import {Collection} from 'bookshelf';
import {Transaction} from 'knex';
// import {IUserRequest} from '../../util/auth';
// import * as e from "express";
import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import {PromiseQueue} from './promise_queue';
import { IUserRequest } from "./IUserRequest";
import { EUpdateType, UpdateObjectFromJson } from "./handlers/shared/update-object-from-json";
import { CreateObjectFromJson } from "./handlers/shared/create-object-from-json";
import { FetchObject } from "./handlers/shared/fetch-object";



export class CrudHandlers {




  public static postFromRequestBody<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>) {
    if (req.body.constructor === Array) {
      const queue = new PromiseQueue(1);
      return queue.runAllPromiseFunctions(req.body.map((jsonObject: any) => {
        return () => {
          return new CreateObjectFromJson(model, jsonObject, req).run();
        };
      }));
    } else {
      return new CreateObjectFromJson(model, req.body, req).run();
    }
  }

  public static getObjectById<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number): Promise<T> {
    return new FetchObject(req, model, objectId, true).run()
    .then((object: T) => {
      if (object === null) {
        return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + objectId});
      } else {
        return Promise.resolve(object);
      }
    });
  }


  public static putObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number, transaction?: Transaction) {
    req.body.id = objectId;
    return new UpdateObjectFromJson(model, req.body, req, EUpdateType.PUT, transaction).run();
  }


  public static patchObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number, transaction?: Transaction) {
    req.body.id = objectId;
    return new UpdateObjectFromJson(model, req.body, req, EUpdateType.PATCH, transaction).run();
  }

  public static putObjects<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, transaction?: Transaction): Promise<T | Collection<T>> {
    if (req.body.constructor === Array) {
      const queue = new PromiseQueue(1);
      return queue.runAllPromiseFunctions(req.body.map((jsonObject: any) => {
        return () => {
          return new UpdateObjectFromJson(model, jsonObject, req, EUpdateType.PUT, transaction).run();
        };
      }));
    } else {
      return new UpdateObjectFromJson(model, req.body, req, EUpdateType.PUT, transaction).run();
    }
  }

  public static patchObjects<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, transaction?: Transaction): Promise<T | Collection<T>> {
    if (req.body.constructor === Array) {
      const queue = new PromiseQueue(1);
      return queue.runAllPromiseFunctions(req.body.map((jsonObject: any) => {
        return () => {
          return new UpdateObjectFromJson(model, jsonObject, req, EUpdateType.PATCH, transaction).run();
        };
      }));
    } else {
      return new UpdateObjectFromJson(model, req.body, req, EUpdateType.PATCH, transaction).run();
    }
  }

  public static deleteObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number) {
    let object;
    return new FetchObject(req, model, objectId, false).run()
    .then((o: T) => {
      object = o;
      if (object === null) {
        return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + objectId});
      } else {
        return object.destroyForUser(req.user);
      }
    })
    .then(() => {
      return Promise.resolve();
    });
  }

  public static setObjectDeleted<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number) {
    return new FetchObject(req, model, objectId, false).run()
    .then((object: T) => {
      if (object === null) {
        return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + objectId});
      } else {
        object.deleted = true;
        return object.saveForUser(req.user);
      }
    });
  }

  public static setObjectUndeleted<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number) {
    return new FetchObject(req, model, objectId, false).run()
    .then((object: T) => {
      if (object === null) {
        return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + objectId});
      } else {
        object.deleted = false;
        return object.saveForUser(req.user);
      }
    });
  }

  // public static fetchObjectForRequest<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, id: number, fetchParams?: any) {
  //   const query = new model().where({id});
  //   return query.fetchForUser(req.user, fetchParams);
  // }
}


/**
 * Worker method for PUT
 *
 * @param model
 * @param jsonObject
 * @param req
 * @param transaction
 * @returns {Promise|*}
 */
// export function handlePutForJsonObject<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest, transaction?: Transaction): Promise<T> {
//   if (jsonObject.id === undefined || jsonObject.id === '') {
//     return handlePostForJsonObject(model, jsonObject, req);
//   } else {
//     return fetchObjectForRequest(req, model, jsonObject.id)
//     .then(object => {
//       if (object === null) {
//         return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + jsonObject.id});
//       } else {
//         if (transaction){
//           return object.updateWithParams(jsonObject,req, {transacting: transaction});
//         } else {
//           return object.updateWithParams(jsonObject,req);
//         }
//       }
//     })
//     .then(object => {
//       if (req.query.p === undefined) {
//         return Promise.resolve(object);
//       } else {
//         return validateFetchOptions(model, req.query.p)
//         .then((fetchOptions: any) => {
//           return new model().where({id: object.id}).fetchForUser(req, {withRelated: fetchOptions});
//         });
//       }
//     });
//   }
// }

/**
 * Worker method for POST
 *
 * @param model
 * @param jsonObject
 * @param req
 * @returns {Promise|*}
 */
// function handlePostForJsonObject<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest) {
//   // if (!req.user){
//   //   return Promise.reject({code: 500, error: 'Request had no user.'});
//   // } else {
//     jsonObject = jsonObject || {};
//     // if (((new model().columns) as any)['userId']) {
//     //   jsonObject.userId = jsonObject.userId || req.user.id;
//     // }
//     const object = new model();
//     return object.updateWithParams(jsonObject, req.user)
//     .then(savedObject => {
//       if (req.query.p === undefined) {
//         return Promise.resolve(savedObject);
//       } else {
//         return validateFetchOptions(model, req.query.p)
//         .then((fetchOptions: any) => {
//           return new model().where({id: object.id}).fetchForUser(req.user, {withRelated: fetchOptions});
//         });
//       }
//     });
//   // }
// }

/**
 * Fetch an object for a req.
 *
 * @param req
 * @param model
 * @param id
 * @param [fetchParams] - Fetch options
 * @returns {*|Promise.<Model|null>}
 */
// export function fetchObjectForRequest<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, id: number, fetchParams?: any) {
//   let query = new model().where({id});
//   return query.fetchForUser(req, fetchParams);
// }

