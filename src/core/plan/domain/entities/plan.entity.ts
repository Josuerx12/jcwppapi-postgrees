import { Entity } from "../../../../config/domain/abstract/entity";
import { UserEntity } from "../../../user/domain/entities/user.entity";

export type PlanEntityProps = {
  id?: string;

  stripeProductId: String;
  name: string;
  slug: string;
  intanceLimit: number;
  price: number;

  users?: UserEntity[];

  createdAt?: Date;
  updatedAt?: Date;
};

export class PlanEntity extends Entity {
  stripeProductId: String;
  name: string;
  slug: string;
  intanceLimit: number;
  price: number;
  users?: UserEntity[];

  constructor(props: PlanEntityProps) {
    super(props);

    this.stripeProductId = props.stripeProductId;
    this.name = props.name;
    this.slug = props.slug;
    this.intanceLimit = props.intanceLimit;
    this.price = props.price;
    this.users = props.users;
  }
}
