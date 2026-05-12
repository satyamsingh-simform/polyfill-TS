type LastChar<T extends string>=T extends `${infer firstChar}${infer rest}`?rest extends ''?firstChar:LastChar<rest>:never;

type A1 = LastChar<'BFE'> // 'E'
type B1 = LastChar<'dev'> // 'v'
type C1 = LastChar<''> // never