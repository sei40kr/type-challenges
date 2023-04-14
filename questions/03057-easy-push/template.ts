type Push<T, U> = T extends [...infer S] ? [...S, U] : never
