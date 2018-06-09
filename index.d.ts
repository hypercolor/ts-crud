// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../ts-postgres-model
//   ../ts-express-controller
//   ../express
//   ../bookshelf
//   ../knex

import { IPostgresModelClass, PostgresModel } from "ts-postgres-model";
import { Controller } from 'ts-express-controller';
import { Response } from 'express';
import * as e from "express";
import { IUser } from "ts-postgres-model";
import { Collection } from 'bookshelf';
import { Transaction } from 'knex';
import { Transaction } from "knex";

/**
    * Default GET by ID
    */
export class GetRoute extends Controller {
        constructor(_type: IPostgresModelClass<any>, idParamName: string);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
/**
    * Default POST from request JSON body
    */
export class PostRoute extends Controller {
        constructor(_type: IPostgresModelClass<any>);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
/**
    * Default PUT by ID from request JSON body
    */
export class PutByIdRoute<T extends PostgresModel<T>> extends Controller {
        constructor(_type: IPostgresModelClass<any>, idParamName: string);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
/**
    * Default PATCH by ID from request JSON body
    */
export class PatchByIdRoute<T extends PostgresModel<T>> extends Controller {
        constructor(_type: IPostgresModelClass<any>, idParamName: string);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
/**
    * Default PUT by ID from request JSON body
    */
export class MultiPutRoute<T extends PostgresModel<T>> extends Controller {
        constructor(_type: IPostgresModelClass<any>);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
/**
    * Default PUT by ID from request JSON body
    */
export class MultiPatchRoute<T extends PostgresModel<T>> extends Controller {
        constructor(_type: IPostgresModelClass<any>);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
/**
    * Default DELETE by ID
    */
export class DeleteRoute extends Controller {
        constructor(_type: IPostgresModelClass<any>, idParamName: string);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<void>;
}
/**
    * Default Query for all objects of a type
    */
export class QueryRoute extends Controller {
        constructor(_type: IPostgresModelClass<any>, fetchParams?: any, _allowDeleted?: boolean | undefined);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any[]>;
}
export class MarkDeletedRoute extends Controller {
        constructor(_type: IPostgresModelClass<any>, idParamName: string);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}
export class MarkUndeletedRoute extends Controller {
        constructor(_type: IPostgresModelClass<any>, idParamName: string);
        protected handleRequest(params: any, req: IUserRequest, res: Response): Promise<any>;
}

export interface IUserRequest extends e.Request {
    user: IUser;
}

export class CrudHandlers {
    static postFromRequestBody<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>): Promise<any>;
    static getObjectById<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number): Promise<T>;
    static putObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number, transaction?: Transaction): Promise<T>;
    static patchObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number, transaction?: Transaction): Promise<T>;
    static putObjects<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, transaction?: Transaction): Promise<T | Collection<T>>;
    static patchObjects<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, transaction?: Transaction): Promise<T | Collection<T>>;
    static deleteObject<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number): Promise<void>;
    static setObjectDeleted<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number): Promise<T>;
    static setObjectUndeleted<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number): Promise<T>;
}

export class CrudConfig {
    static setControllerConfig(name: string, description: string, version: string): void;
}

export class GetAllObjectsHandler<T extends PostgresModel<T>> extends Handler {
    constructor(req: IUserRequest, model: IPostgresModelClass<T>, fetchParams: any, allowDeleted: boolean | undefined);
    run(): Promise<any[]>;
}

export enum EUpdateType {
    PUT = 0,
    PATCH = 1,
}
export class UpdateObjectFromJson<T extends PostgresModel<T>> extends Handler {
    constructor(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest, updateType: EUpdateType, transaction?: Transaction | undefined);
    run(): Promise<T>;
}

export class FetchObject<T extends PostgresModel<T>> extends Handler {
    constructor(req: IUserRequest, model: IPostgresModelClass<T>, objectId: number, allowQueryPopulation: boolean, fetchParams?: any);
    run(): Promise<T>;
}

export class CreateObjectFromJson<T extends PostgresModel<T>> extends Handler {
    constructor(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest, transaction?: Transaction | undefined);
    run(): Promise<T>;
}

export interface IPivotConfig<T extends PostgresModel<T>> {
    foreignArrayPropertyName: string;
    pivotModel: IPostgresModelClass<T>;
    pivotKeyLocalItemId: string;
    pivotKeyForeignItemId: string;
}
export interface IPivotObject {
    id: number;
}
export class UpdatePivotTables<T extends PostgresModel<T>> extends Handler {
    constructor(req: IUserRequest, objectJson: any, localObjectId: any, pivotConfig: IPivotConfig<T>, transaction?: Transaction | undefined);
    run(): Promise<void>;
}

export abstract class Handler {
    abstract run(): Promise<any>;
}

