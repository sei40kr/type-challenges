type StringToUnion<
  T extends string,
  S = never
> = T extends `${infer F}${infer R}` ? StringToUnion<R, S | F> : S;
