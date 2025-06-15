export interface IUseCase<InputT, OutputT> {
  execute(input: InputT): Promise<OutputT>;
}
