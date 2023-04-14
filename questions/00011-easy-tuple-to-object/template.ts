type TupleToObject<T extends readonly (string | number)[]> = { [S in T[number]]: S }
