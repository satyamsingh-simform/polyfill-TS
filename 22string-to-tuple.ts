type StringToTuple<T extends string> = T extends `${infer Char}${infer rest}`?[Char,...StringToTuple<rest>]:[];

type A51 = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B51 = StringToTuple<''> // []