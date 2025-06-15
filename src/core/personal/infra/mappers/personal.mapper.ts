import { Personal, Prisma } from "../../../../config/db/generated/prisma";
import { PersonalEntity } from "../../domain/entities/personal.entity";

export type PersonalOutput = {
  id: string;
  cpf: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export class PersonalMapper {
  static toModel(entity: PersonalEntity): Prisma.PersonalCreateInput {
    return {
      id: entity.id,
      cpf: entity.cpf.getValue(),
    };
  }
  static toEntity(model: Personal): PersonalEntity {
    return new PersonalEntity({
      id: model.id,
      cpf: model.cpf,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }
  static toOutput(entity: PersonalEntity): PersonalOutput {
    return {
      id: entity.id,
      cpf: entity.cpf.getValue(),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
