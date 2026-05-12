type FirstChar<T extends string> = T extends `${infer firstChar}${infer rest}`?firstChar:never;

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never