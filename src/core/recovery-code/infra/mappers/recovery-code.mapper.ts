import { RecoveryCode, Prisma } from "../../../../config/db/generated/prisma";
import { RecoveryCodeEntity } from "../../domain/entities/recovery-code.entity";

export type RecoveryCodeOutput = {
  id: string;
  userId: string;
  code: string;
  usedAt?: Date | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export class RecoveryCodeMapper {
  static toModel(entity: RecoveryCodeEntity): Prisma.RecoveryCodeCreateInput {
    return {
      id: entity.id,
      user_id: entity.userId,
      code: entity.code,
      used_at: entity.usedAt,
    };
  }
  static toEntity(model: RecoveryCode): RecoveryCodeEntity {
    return new RecoveryCodeEntity({
      id: model.id,
      userId: model.user_id,
      code: model.code,
      usedAt: model.used_at,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }
  static toOutput(entity: RecoveryCodeEntity): RecoveryCodeOutput {
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
