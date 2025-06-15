import { Prisma } from "../../../../config/db/generated/prisma";
import prisma from "../../../../config/db/prisma";
import {
  IUserRepository,
  UserInputParams,
  UserOutputParams,
} from "../../domain/contracts/user-repository.interface";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserMapper } from "../mappers/user.mapper";

export class UserRepository implements IUserRepository {
  async getById(id: string): Promise<UserEntity | null> {
    const model = await prisma.user.findUnique({
      where: { id },
      include: {
        company: true,
        personal: true,
        plan: true,
      },
    });

    return model ? UserMapper.toEntity(model) : null;
  }

  async getAll(props: UserInputParams): Promise<UserOutputParams> {
    const where: Prisma.UserWhereInput = {
      ...(props.filter && {
        OR: [
          {
            email: {
              contains: props.filter || "",
              mode: "insensitive",
            },

            name: {
              contains: props.filter || "",
              mode: "insensitive",
            },

            company: {
              cnpj: { contains: props.filter || "", mode: "insensitive" },
            },

            personal: {
              cpf: { contains: props.filter || "", mode: "insensitive" },
            },
          },
        ],
      }),
    };

    const totalItems = await prisma.user.count({ where });

    const totalPages = Math.ceil(totalItems / props.perPage);

    const items = await prisma.user.findMany({
      where,
      include: {
        company: true,
        personal: true,
        plan: true,
      },
      take: props.perPage,
      skip: props.perPage * (props.page - 1),
    });

    return {
      items: items.map((i) => UserMapper.toEntity(i)),
      page: props.page,
      perPage: props.perPage,
      totalItems,
      totalPages: totalPages,
    };
  }

  async store(entity: UserEntity): Promise<void> {
    await prisma.user.create({ data: UserMapper.toModel(entity) });
  }

  async update(entity: UserEntity): Promise<void> {
    await prisma.user.update({
      where: {
        id: entity.id,
      },
      data: UserMapper.toModel(entity),
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }
}
