import { Prisma } from "../../../../config/db/generated/prisma";
import {
  CompanyMapper,
  CompanyOutput,
} from "../../../company/infra/mappers/company.mapper";
import { InstanceOutput } from "../../../instance/infra/mappers/instance.mapper";
import {
  PersonalMapper,
  PersonalOutput,
} from "../../../personal/infra/mappers/personal.mapper";
import {
  PlanMapper,
  PlanOutput,
} from "../../../plan/infra/mappers/plan.mapper";
import { UserEntity } from "../../domain/entities/user.entity";

export type UserOutput = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthdate?: Date | null;
  active?: boolean;

  personal?: PersonalOutput | null;
  company?: CompanyOutput | null;
  plan?: PlanOutput | null;
  instances?: InstanceOutput[];

  createdAt: Date;
  updatedAt: Date;
};

export class UserMapper {
  static toModel(entity: UserEntity): Prisma.UserCreateInput {
    return {
      id: entity.id,
      email: entity.email,
      name: entity.name,
      password: entity.password,
      phone: entity.phone.getValue(),
      active: entity.active,
      birthdate: entity.birthdate,
      plan: {
        connect: {
          id: entity.planId,
        },
      },
      ...(entity.company && {
        company: {
          create: {
            id: entity.company.id,
            cnpj: entity.company.cnpj.getValue(),
            holder: entity.company.holder,
          },
        },
      }),
      ...(entity.personal && {
        personal: {
          create: {
            id: entity.personal.id,
            cpf: entity.personal.cpf.getValue(),
          },
        },
      }),
    };
  }

  static toEntity(
    model: Prisma.UserGetPayload<{
      include: { company: true; personal: true; plan: true };
    }>
  ): UserEntity {
    return new UserEntity({
      id: model.id,
      planId: model.plan_id,
      companyId: model.company_id,
      personalId: model.personal_id,
      email: model.email,
      name: model.name,
      phone: model.phone,
      active: model.active,
      birthdate: model.birthdate,
      password: model.password,
      plan: model.plan && PlanMapper.toEntity(model.plan),
      company: model.company && CompanyMapper.toEntity(model.company),
      personal: model.personal && PersonalMapper.toEntity(model.personal),
      createdAt: model.created_at,
      updatedAt: model.updated_at,
    });
  }

  static toOutput(entity: UserEntity): UserOutput {
    return {
      id: entity.id,
      email: entity.email,
      name: entity.name,
      phone: entity.phone.getValue(),
      active: entity.active,
      plan: entity.plan && PlanMapper.toOutput(entity.plan),
      company: entity.company && CompanyMapper.toOutput(entity.company),
      personal: entity.personal && PersonalMapper.toOutput(entity.personal),
      birthdate: entity.birthdate,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
