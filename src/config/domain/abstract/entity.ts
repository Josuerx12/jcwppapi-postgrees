import { randomUUID } from "crypto";

export type EntityProps = {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export abstract class Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: EntityProps) {
    this.id = props.id || randomUUID();
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }
}
