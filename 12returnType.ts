//12//“Match a function → ignore params → capture return type as R”
type MyReturnType<T>=T extends (...args:any[])=>infer R?R:never;
type returnFnType=MyReturnType<(a:number)=>string[]>//string[]
