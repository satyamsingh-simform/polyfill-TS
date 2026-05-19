// type IsNever<T> = T extends never ? true:false

type IsNever<T> = [T] extends [never] ? true:false

type A3 = IsNever<never> // true
type B3 = IsNever<string> // false
type C3 = IsNever<undefined> // false