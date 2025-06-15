import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { UserEntity } from "../entities/user.entity";

export type UserFilter = string;

export class UserInputParams extends InputParams<UserFilter> {}

export class UserOutputParams extends OuputParams<UserEntity> {}

export interface IUserRepository
  extends IRepository<string, UserEntity, UserInputParams, UserOutputParams> {}
