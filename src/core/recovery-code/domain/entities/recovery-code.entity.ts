import { Entity } from "../../../../config/domain/abstract/entity";

export type RecoveryCodeEntityProps = {
  id?: string;
  userId: string;
  code: string;
  usedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export class RecoveryCodeEntity extends Entity {
  userId: string;
  code: string;
  usedAt?: Date | null;

  constructor(props: RecoveryCodeEntityProps) {
    super(props);

    this.userId = props.userId;
    this.code = props.code;
    this.usedAt = props.usedAt;
  }
}
