

// import {PostgresModel, IPostgresModelClass} from '../../models/shared/base';
// import {IUserRequest} from '../../util/auth';
// import {Controller, Response} from './base';
import {CrudHandlers} from './crud-handlers';
import { IUserRequest } from "./IUserRequest";
import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import {Controller} from 'ts-express-controller';
import {Response} from 'express';

/**
 * Default GET by ID
 */
export class GetRoute extends Controller {
  constructor(private _type: IPostgresModelClass<any>, private idParamName: string) {super({
    routeParams: [idParamName]
  });}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.getObjectById(req, this._type, params[this.idParamName]);
  }
}


/**
 * Default POST from request JSON body
 */
export class PostRoute extends Controller {
  constructor(private _type: IPostgresModelClass<any>) {super();}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.postFromRequestBody(req, this._type);
  }
}

/**
 * Default PUT by ID from request JSON body
 */
export class PutByIdRoute<T extends PostgresModel<T>> extends Controller {
  constructor(private _type: IPostgresModelClass<any>, private idParamName: string) {super({
    routeParams: [idParamName]
  });}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.putObject(req, this._type, params[this.idParamName]);
  }
}

/**
 * Default PUT by ID from request JSON body
 */
export class MultiPutRoute<T extends PostgresModel<T>> extends Controller {
  constructor(private _type: IPostgresModelClass<any>) {super();}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.putObjects(req, this._type);
  }
}

/**
 * Default DELETE by ID
 */
export class DeleteRoute extends Controller {
  constructor(private _type: IPostgresModelClass<any>, private idParamName: string) {super({
    routeParams: [idParamName]
  });}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.deleteObject(req, this._type, params[this.idParamName]);
  }
}

/**
 * Default Query for all objects of a type
 */
export class QueryRoute extends Controller {
  constructor(private _type: IPostgresModelClass<any>, private fetchParams?: any, private _allowDeleted?: boolean) {super();}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.getAllObjects(req, this._type, this.fetchParams, this._allowDeleted);
  }
}


export class MarkDeletedRoute extends Controller {
  constructor(private _type: IPostgresModelClass<any>, private idParamName: string) {super({
    routeParams: [idParamName]
  });}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.setObjectDeleted(req, this._type, params[this.idParamName]);
  }
}

export class MarkUndeletedRoute extends Controller {
  constructor(private _type: IPostgresModelClass<any>, private idParamName: string) {super({
    routeParams: [idParamName]
  });}
  protected handleRequest(params: any, req: IUserRequest, res: Response) {
    return CrudHandlers.setObjectUndeleted(req, this._type, params[this.idParamName]);
  }
}

