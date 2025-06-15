import { Entity } from "../../../../config/domain/abstract/entity";
import { UserEntity } from "../../../user/domain/entities/user.entity";

export type InstanceEntityProps = {
  id?: string;
  userId: string;
  authPath: string;
  user?: UserEntity;
  createdAt?: Date;
  updatedAt?: Date;
};

export class InstanceEntity extends Entity {
  userId: string;
  authPath: string;
  user?: UserEntity;

  constructor(props: InstanceEntityProps) {
    super(props);

    this.userId = props.userId;
    this.authPath = props.authPath;
    this.user = props.user;
  }
}
