import { InputParams } from "../../../../config/domain/abstract/input-params";
import { OuputParams } from "../../../../config/domain/abstract/output-params";
import { IRepository } from "../../../../config/domain/interfaces/repository.interface";
import { CompanyEntity } from "../entities/company.entity";

export type CompanyFilter = string;

export class CompanyInputParams extends InputParams<CompanyFilter> {}

export class CompanyOutputParams extends OuputParams<CompanyEntity> {}

export interface CompanyRepository
  extends IRepository<
    string,
    CompanyEntity,
    CompanyInputParams,
    CompanyOutputParams
  > {}
