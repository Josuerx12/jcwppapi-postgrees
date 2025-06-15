export interface IRepository<IdT, EntityT, InputParamsT, OutputParamsT> {
  getById(id: IdT): Promise<EntityT | null>;
  getAll(props: InputParamsT): Promise<OutputParamsT>;
  store(entity: EntityT): Promise<void>;
  update(entity: EntityT): Promise<void>;
  delete(id: IdT): Promise<void>;
}
