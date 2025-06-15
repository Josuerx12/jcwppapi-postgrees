import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { PersonalEntity } from "../entities/personal.entity";

export type PersonalFilter = string;

export class PersonalInputParams extends InputParams<PersonalFilter> {}

export class PersonalOutputParams extends OuputParams<PersonalEntity> {}

export interface PersonalRepository
  extends IRepository<
    string,
    PersonalEntity,
    PersonalInputParams,
    PersonalOutputParams
  > {}
