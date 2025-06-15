import { compareSync, hashSync } from "bcryptjs";
import { Entity } from "../../../../config/domain/abstract/entity";
import { PhoneVo } from "../../../../config/domain/value_objects/phone.vo";
import { CpfVo } from "../../../../config/domain/value_objects/cpf.vo";

export type PersonalEntityProps = {
  id?: string;
  cpf: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class PersonalEntity extends Entity {
  cpf: CpfVo;

  constructor(props: PersonalEntityProps) {
    super(props);

    this.cpf = new CpfVo(props.cpf);
  }
}
