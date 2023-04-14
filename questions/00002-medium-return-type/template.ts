type MyReturnType<T> = T extends (...args: unknown[]) => infer S ? S : never
