import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { RecoveryCodeEntity } from "../entities/recovery-code.entity";

export type RecoveryCodeFilter = string;

export class RecoveryCodeInputParams extends InputParams<RecoveryCodeFilter> {}

export class RecoveryCodeOutputParams extends OuputParams<RecoveryCodeEntity> {}

export interface RecoveryCodeRepository
  extends IRepository<
    string,
    RecoveryCodeEntity,
    RecoveryCodeInputParams,
    RecoveryCodeOutputParams
  > {}
