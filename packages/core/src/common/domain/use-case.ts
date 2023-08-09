export interface UseCase<
  THandleArgs extends object,
  TReturnType extends any = void
> {
  handle(args: THandleArgs): Promise<TReturnType>;
}
