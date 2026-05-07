//required
type User101={
    name?:string,
    age:number,
    city?:string
}
type myRequired<T>={
    [K in keyof T]-?:T[K]
}
type required=myRequired<User101>

