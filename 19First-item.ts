// type FirstItem<T extends any[]> = [0];

type FirstItem<T extends any[]>=T extends [infer first,...infer rest]?first:never;

type A2 = FirstItem<[string, number, boolean]> // string
type B2 = FirstItem<['B', 'F', 'E']> // 'B'