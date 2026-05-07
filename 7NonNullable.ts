
//7.NonNullable<T> :Remove null and undefined from a type
type MyNonNullable<T> = T extends null | undefined ? never : T;

