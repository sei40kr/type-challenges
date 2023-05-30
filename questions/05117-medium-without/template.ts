type Without<
  T extends any[],
  U extends T[number] | T[number][]
> = U extends unknown[]
  ? T extends [infer F, ...infer R]
  ? F extends U[number]
  ? Without<R, U>
  : [F, ...Without<R, U>]
  : []
  : Without<T, [U]>
