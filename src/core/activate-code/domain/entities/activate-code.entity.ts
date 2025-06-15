import { Entity } from "../../../../config/domain/abstract/entity";

export type ActivateCodeEntityProps = {
  id?: string;
  userId: string;
  code: string;
  usedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export class ActivateCodeEntity extends Entity {
  userId: string;
  code: string;
  usedAt?: Date | null;

  constructor(props: ActivateCodeEntityProps) {
    super(props);

    this.userId = props.userId;
    this.code = props.code;
    this.usedAt = props.usedAt;
  }
}
