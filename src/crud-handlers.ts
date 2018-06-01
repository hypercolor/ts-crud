

import {Collection} from 'bookshelf';
import {Transaction} from 'knex';
// import {IUserRequest} from '../../util/auth';
// import * as e from "express";
import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import {PromiseQueue} from './promise_queue';
import { IUserRequest } from "./IUserRequest";



export class CrudHandlers {


  public static getAllObjects<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, fetchParams: any, allowDeleted: boolean | undefined){

    const query = allowDeleted ? {} : {deleted: false};
    return new model().where(query).fetchAllForUser(req.user, fetchParams)
    .then(objects => {
      return Promise.resolve(objects.toJSON());
    });

  }

  public static postFromRequestBody<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>) {
    if (req.body.constructor === Array) {
      const queue = new PromiseQueue(1);
      return queue.runAllPromiseFunctions(req.body.map((jsonObject: any) => {
        return () => {
          return handlePostForJsonObject(model, jsonObject, req);
        };
      }));
    } else {
      return handlePostForJsonObject(model, req.body, req);
    }
  }

  public static getObjectById<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number): Promise<T> {
    return this.fetchObjectForRequest(req, model, objectId)
    .then((object: T) => {
      if (object === null) {
        return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + objectId});
      } else {
        return Promise.resolve(object);
      }
    });
  }


  public static putObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number) {
    req.body.id = objectId;
    return this.handlePutForJsonObject(model, req.body, req);
  }

  public static putObjects<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>): Promise<T | Collection<T>> {
    if (req.body.constructor === Array) {
      const queue = new PromiseQueue(1);
      return queue.runAllPromiseFunctions(req.body.map((jsonObject: any) => {
        return () => {
          return this.handlePutForJsonObject(model, jsonObject, req);
        };
      }));
    } else {
      return this.handlePutForJsonObject(model, req.body, req);
    }
  }

  public static deleteObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number) {
    let object;
    return this.fetchObjectForRequest(req, model, objectId, null)
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
    return this.fetchObjectForRequest(req, model, objectId)
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
    return this.fetchObjectForRequest(req, model, objectId, null)
    .then((object: T) => {
      if (object === null) {
        return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + objectId});
      } else {
        object.deleted = false;
        return object.saveForUser(req.user);
      }
    });
  }

  public static handlePutForJsonObject<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest, transaction?: Transaction): Promise<T> {
    if (jsonObject.id === undefined || jsonObject.id === '') {
      return handlePostForJsonObject(model, jsonObject, req);
    } else {
      return this.fetchObjectForRequest(req, model, jsonObject.id)
      .then((object: T) => {
        if (object === null) {
          return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + jsonObject.id});
        } else {
          if (transaction){
            return object.updateWithParams(jsonObject, req.user, {transacting: transaction});
          } else {
            return object.updateWithParams(jsonObject, req.user);
          }
        }
      })
      .then((object: T) => {
        if (req.query.p === undefined) {
          return Promise.resolve(object);
        } else {
          return validateFetchOptions(model, req.query.p)
          .then((fetchOptions: any) => {
            return new model().where({id: object.id}).fetchForUser(req.user, {withRelated: fetchOptions});
          });
        }
      });
    }
  }

  public static fetchObjectForRequest<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, id: number, fetchParams?: any) {
    const query = new model().where({id});
    return query.fetchForUser(req.user, fetchParams);
  }
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
function handlePostForJsonObject<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest) {
  // if (!req.user){
  //   return Promise.reject({code: 500, error: 'Request had no user.'});
  // } else {
    jsonObject = jsonObject || {};
    // if (((new model().columns) as any)['userId']) {
    //   jsonObject.userId = jsonObject.userId || req.user.id;
    // }
    const object = new model();
    return object.updateWithParams(jsonObject, req.user)
    .then(savedObject => {
      if (req.query.p === undefined) {
        return Promise.resolve(savedObject);
      } else {
        return validateFetchOptions(model, req.query.p)
        .then((fetchOptions: any) => {
          return new model().where({id: object.id}).fetchForUser(req.user, {withRelated: fetchOptions});
        });
      }
    });
  // }
}

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


/**
 * Validate the fetch parameters specified in population-enabled routes.
 *
 * @param model
 * @param fetchOptionsString
 * @returns {*}
 */
function validateFetchOptions<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, fetchOptionsString: string) {
  // console.log("Validating fetch options for " + model.model.MODEL_NAME + ": " + fetchOptionsString);
  return parseFetchOptions(fetchOptionsString)
  .then(fetchOptions => {
    if (typeof fetchOptions === 'string') {
      if (!isValidRelationship(model, fetchOptions)) {
        return Promise.reject({
          code: 400,
          error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOptions
        });
      } else {
        return Promise.resolve(fetchOptions as any);
      }
    } else if (fetchOptions instanceof Array) {
      return Promise.all(fetchOptions.map(fetchOption => {
        if (!isValidRelationship(model, fetchOption)) {
          return Promise.reject({
            code: 400,
            error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOption
          });
        } else {
          return Promise.resolve();
        }
      }))
      .then(() => {
        return Promise.resolve(fetchOptions);
      });
    } else {
      return Promise.reject({
        code: 400,
        error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOptions
      });
    }
  });


  function isValidRelationship(testModel: IPostgresModelClass<T>, testRelationship: string) {
    if (!testModel.relationships) {
      return false;
    } else {
      let isValid = false;
      Object.values(testModel.relationships).forEach(relationship => {
        if (relationship === testRelationship) {
          isValid = true;
        }
      });
      return isValid;
    }
  }
}

/**
 * Convert a fetch options string from the URL into a JSON object.
 *
 * @param fetchOptionsString
 * @returns {*}
 */
function parseFetchOptions(fetchOptionsString: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const options = JSON.parse(fetchOptionsString);
      resolve(options);
    } catch (err) {
      reject('Invalid JSON for fetch options: ' + fetchOptionsString + ' - ' + err.message);
    }
  });
}
