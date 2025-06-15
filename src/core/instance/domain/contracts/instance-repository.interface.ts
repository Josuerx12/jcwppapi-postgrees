import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { InstanceEntity } from "../entities/instance.entity";

export type InstanceFilter = string;

export class InstanceInputParams extends InputParams<InstanceFilter> {}

export class InstanceOutputParams extends OuputParams<InstanceEntity> {}

export interface InstanceRepository
  extends IRepository<
    string,
    InstanceEntity,
    InstanceInputParams,
    InstanceOutputParams
  > {}
