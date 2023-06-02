type Falsy = false | 0 | "" | [] | { [key: string]: never } | null | undefined

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true
