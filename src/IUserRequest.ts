import * as e from "express";
import { IUser } from "ts-postgres-model";

export interface IUserRequest extends e.Request {
  user: IUser
}
