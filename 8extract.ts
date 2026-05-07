
//8.Extract<T, U> :Keep only types from T that are assignable to U
type MyExtract<T, U> = T extends U ? T : never;
type A0 = MyExtract<string | number | boolean, string | number>;
// string | number

