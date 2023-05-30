type IsPalindrome<T extends number | string> =
  `${T}` extends `${infer F}${infer R}`
  ? `${T}` extends `${F}${infer M}${F}`
  ? IsPalindrome<M>
  : R extends ""
  ? true
  : false
  : true
