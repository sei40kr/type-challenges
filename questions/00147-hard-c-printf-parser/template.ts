type ControlsMap = {
  c: "char"
  s: "string"
  d: "dec"
  o: "oct"
  h: "hex"
  f: "float"
  p: "pointer"
}

type ParsePrintFormat<T extends string> =
  T extends `${infer F}${infer S}${infer R}`
  ? F extends "%"
  ? S extends keyof ControlsMap
  ? [ControlsMap[S], ...ParsePrintFormat<R>]
  : ParsePrintFormat<R>
  : ParsePrintFormat<`${S}${R}`>
  : []
