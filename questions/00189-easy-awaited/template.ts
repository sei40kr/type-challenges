type MyPromise<S> = { then: (onfulfilled: (arg: S) => any) => any }

type MyAwaited<T extends MyPromise<any>> = T extends MyPromise<infer S> ?
  (S extends MyPromise<any> ? MyAwaited<S> : S)
  : never
