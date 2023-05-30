type CheckRepeatedChars<
  T extends string,
  S = {}
> = T extends `${infer F}${infer R}`
  ? F extends keyof S
  ? true
  : CheckRepeatedChars<R, S & { [K in F]: true }>
  : false
