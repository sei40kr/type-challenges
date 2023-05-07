type Flatten<S extends any[]> = S extends [infer F, ...infer R]
  ? F extends any[]
  ? [...Flatten<F>, ...Flatten<R>]
  : [F, ...Flatten<R>]
  : [];
