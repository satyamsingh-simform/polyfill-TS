//9.Exclude<T, U>
type MyExclude<T, U> = T extends U ? never : T;
type A8 = MyExclude<string | number | boolean, number>;
// string | boolean

