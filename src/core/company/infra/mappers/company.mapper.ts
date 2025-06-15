import { Company, Prisma } from "../../../../config/db/generated/prisma";
import { CompanyEntity } from "../../domain/entities/company.entity";

export type CompanyOutput = {
  id: string;
  cnpj: string;
  holder?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export class CompanyMapper {
  static toModel(entity: CompanyEntity): Prisma.CompanyCreateInput {
    return {
      id: entity.id,
      holder: entity.holder,
      cnpj: entity.cnpj.getValue(),
    };
  }
  static toEntity(model: Company): CompanyEntity {
    return new CompanyEntity({
      id: model.id,
      cnpj: model.cnpj,
      holder: model.holder,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }
  static toOutput(entity: CompanyEntity): CompanyOutput {
    return {
      id: entity.id,
      cnpj: entity.cnpj.getValue(),
      holder: entity.holder,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
