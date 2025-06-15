export type BaseInputParams<FilterT> = {
  page?: string;
  perPage?: string;
  orderBy?: string;
  sort?: string;
  filter?: FilterT;
};

export class InputParams<FilterT> {
  page: number;
  perPage: number;
  orderBy?: string;
  sort?: string;
  filter?: FilterT;
  constructor(props: BaseInputParams<FilterT>) {
    this.page = props.page ? parseInt(props.page) : 1;
    this.perPage = props.perPage ? parseInt(props.perPage) : 15;
    this.orderBy = props.orderBy;
    this.sort = props.sort;
    this.filter = props.filter;
  }
}
