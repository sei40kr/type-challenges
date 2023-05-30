type Trunc<T extends number | string> = `${T}` extends `${infer L}.${infer _}`
  ? L extends ""
  ? "0"
  : L
  : `${T}`
