type User100={
    name:string,
    age:number,
    city:string
}

//partial pollyfills
type myPartial<T>={
    [K in keyof T]?:T[K];
}
type userrP=myPartial<User100>
const pUser:userrP={
    name:'satya',
    city:'jsr'
}















