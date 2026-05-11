//10.It extracts the parameter types of a function and returns them as a tuple(bcz ...args form tuple).
type MyParameters<T>=T extends (...args:infer P)=>void?P:never;
type fnPara=MyParameters<(a:number,b:string)=>void>

