import { Entity } from "../../../../config/domain/abstract/entity";
import { CnpjVo } from "../../../../config/domain/value_objects/cnpj.vo";

export type CompanyEntityProps = {
  id?: string;
  cnpj: string;
  holder?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export class CompanyEntity extends Entity {
  cnpj: CnpjVo;
  holder?: string | null;

  constructor(props: CompanyEntityProps) {
    super(props);

    this.cnpj = new CnpjVo(props.cnpj);
    this.holder = props.holder;
  }
}
