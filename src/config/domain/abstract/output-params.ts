export type BaseOutputParams<EntityT> = {
  items: EntityT[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
};

export class OuputParams<EntityT> {
  items: EntityT[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;

  constructor(props: BaseOutputParams<EntityT>) {
    this.items = props.items;
    this.page = props.page;
    this.perPage = props.perPage;
    this.totalItems = props.totalItems;
    this.totalPages = props.totalPages;
  }
}
