import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { ActivateCodeEntity } from "../entities/activate-code.entity";

export type ActivateCodeFilter = string;

export class ActivateCodeInputParams extends InputParams<ActivateCodeFilter> {}

export class ActivateCodeOutputParams extends OuputParams<ActivateCodeEntity> {}

export interface ActivateCodeRepository
  extends IRepository<
    string,
    ActivateCodeEntity,
    ActivateCodeInputParams,
    ActivateCodeOutputParams
  > {}
