import { Instance, Prisma } from "../../../../config/db/generated/prisma";
import { InstanceEntity } from "../../domain/entities/instance.entity";

export type InstanceOutput = {
  id: string;
  userId: string;
  authPath: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export class InstanceMapper {
  static toModel(entity: InstanceEntity): Prisma.InstanceCreateInput {
    return {
      id: entity.id,
      auth_path: entity.authPath,
      user: {
        connect: {
          id: entity.userId,
        },
      },
    };
  }
  static toEntity(model: Instance): InstanceEntity {
    return new InstanceEntity({
      id: model.id,
      userId: model.user_id,
      authPath: model.auth_path,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }
  static toOutput(entity: InstanceEntity): InstanceOutput {
    return {
      id: entity.id,
      userId: entity.userId,
      authPath: entity.authPath,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
