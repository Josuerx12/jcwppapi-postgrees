import { compareSync, hashSync } from "bcryptjs";
import { Entity } from "../../../../config/domain/abstract/entity";
import { PhoneVo } from "../../../../config/domain/value_objects/phone.vo";
import { PersonalEntity } from "../../../personal/domain/entities/personal.entity";
import { CompanyEntity } from "../../../company/domain/entities/company.entity";
import { InstanceEntity } from "../../../instance/domain/entities/instance.entity";
import { PlanEntity } from "../../../plan/domain/entities/plan.entity";

export type UserEntityProps = {
  id?: string;
  personalId?: string | null;
  companyId?: string | null;

  planId: string;
  name: string;
  email: string;
  phone: string;
  birthdate?: Date | null;
  password?: string;
  active?: boolean;

  personal?: PersonalEntity | null;
  company?: CompanyEntity | null;
  instances?: InstanceEntity[] | null;
  plan?: PlanEntity | null;

  createdAt?: Date;
  updatedAt?: Date;
};

export class UserEntity extends Entity {
  personalId?: string | null;
  companyId?: string | null;
  planId: string;
  name: string;
  email: string;
  phone: PhoneVo;
  birthdate?: Date | null;
  password: string;
  active?: boolean;
  personal?: PersonalEntity | null;
  company?: CompanyEntity | null;
  instances?: InstanceEntity[] | null;
  plan?: PlanEntity | null;

  constructor(props: UserEntityProps) {
    super(props);

    this.companyId = props.companyId;
    this.personalId = props.personalId;
    this.planId = props.planId;
    this.active = typeof props.active === "boolean" ? props.active : false;
    this.birthdate = props.birthdate;
    this.name = props.name;
    this.email = props.email;
    this.phone = new PhoneVo(props.phone);
    this.password = this.setPassword(props.password);

    this.personal = props.personal;
    this.company = props.company;
    this.instances = props.instances;
    this.plan = props.plan;
  }

  changePassword(oldPassword: string, newPassword: string) {
    const verifyOldPassword = compareSync(oldPassword, this.password!);

    if (!verifyOldPassword) {
      throw new Error("Senha antiga informada invalida!");
    }

    this.password = hashSync(newPassword, 10);
  }

  setPassword(password?: string) {
    if (!password) {
      throw new Error("Senha deve ser informada!");
    }

    const bcryptRegex = /^\$2[aby]\$.{56}$/;

    if (bcryptRegex.test(password)) {
      return password;
    }

    return hashSync(password, 10);
  }
}
