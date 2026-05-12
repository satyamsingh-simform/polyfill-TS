type LastItem<T extends any[]> = T extends [infer first,...infer rest]?rest extends []?first:LastItem<rest>:never;


type A4 = LastItem<[string, number, boolean]> // boolean
type B4 = LastItem<['B', 'F', 'E']> // 'E'
type C4 = LastItem<[]> // never
