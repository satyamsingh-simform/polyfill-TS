// type LengthOfString<T extends string> = T extends `${infer Char}${infer Rest}`?[Char, ...LengthOfString<Rest>]['length']:0

type LengthOfString<T extends string, Count extends any[]=[]> = T extends `${infer Char}${infer Rest}`? LengthOfString<Rest,[...Count,Char]>:Count['length']
type A6 = LengthOfString<'BFE.dev'> // 7
type B6 = LengthOfString<''> // 7