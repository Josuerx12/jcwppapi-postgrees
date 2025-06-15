import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { PlanEntity } from "../entities/plan.entity";

export type PlanFilter = string;

export class PlanInputParams extends InputParams<PlanFilter> {}

export class PlanOutputParams extends OuputParams<PlanEntity> {}

export interface PlanRepository
  extends IRepository<string, PlanEntity, PlanInputParams, PlanOutputParams> {}
