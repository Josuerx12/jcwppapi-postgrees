import { ActivateCode, Prisma } from "../../../../config/db/generated/prisma";
import { ActivateCodeEntity } from "../../domain/entities/activate-code.entity";

export type ActivateCodeOutput = {
  id: string;
  userId: string;
  code: string;
  usedAt?: Date | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export class ActivateCodeMapper {
  static toModel(entity: ActivateCodeEntity): Prisma.ActivateCodeCreateInput {
    return {
      id: entity.id,
      user_id: entity.userId,
      code: entity.code,
      used_at: entity.usedAt,
    };
  }
  static toEntity(model: ActivateCode): ActivateCodeEntity {
    return new ActivateCodeEntity({
      id: model.id,
      userId: model.user_id,
      code: model.code,
      usedAt: model.used_at,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }
  static toOutput(entity: ActivateCodeEntity): ActivateCodeOutput {
    return {
      id: entity.id,
      userId: entity.userId,
      code: entity.code,
      usedAt: entity.usedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
