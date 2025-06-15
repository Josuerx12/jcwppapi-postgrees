export type BasePaginationOutputParams<OutputT> = {
  items: OutputT[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
};

export class PaginationOuput<OutputT> {
  items: OutputT[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;

  constructor(props: BasePaginationOutputParams<OutputT>) {
    this.items = props.items;
    this.page = props.page;
    this.perPage = props.perPage;
    this.totalItems = props.totalItems;
    this.totalPages = props.totalPages;
  }
}
