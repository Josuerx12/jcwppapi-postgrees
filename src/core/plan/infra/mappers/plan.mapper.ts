import { Plan, Prisma } from "../../../../config/db/generated/prisma";
import { Currency } from "../../../../config/domain/currency";
import { PlanEntity } from "../../domain/entities/plan.entity";

export type PlanOutput = {
  name: string;
  slug: string;
  instanceLimit: number;
  price: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export class PlanMapper {
  static toModel(entity: PlanEntity): Prisma.PlanCreateInput {
    return {
      id: entity.id,
      stripe_product_id: entity.stripeProductId,
      instance_limit: entity.intanceLimit,
      name: entity.name,
      slug: entity.slug,
      price: Currency.toCents(entity.price),
    };
  }
  static toEntity(model: Plan): PlanEntity {
    return new PlanEntity({
      id: model.id,
      stripeProductId: model.stripe_product_id,
      name: model.name,
      price: Currency.fromCents(model.price),
      slug: model.slug,
      intanceLimit: model.instance_limit,
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }
  static toOutput(entity: PlanEntity): PlanOutput {
    return {
      name: entity.name,
      price: entity.price,
      slug: entity.slug,
      instanceLimit: entity.intanceLimit,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
