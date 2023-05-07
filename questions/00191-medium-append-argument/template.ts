type AppendArgument<Fn extends (..._: any[]) => any, A> = (
  ..._: [...Parameters<Fn>, A]
) => ReturnType<Fn>;
