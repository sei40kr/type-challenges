type GetMiddleElement<T extends any[]> = T["length"] extends 1 | 2
  ? T
  : T extends [any, ...infer R, any]
  ? GetMiddleElement<R>
  : []
