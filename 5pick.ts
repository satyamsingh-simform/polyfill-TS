//5.Pick<T,K>
type userW={
    name:string,
    age:number,
    city:string,
}
type myPick<T,K extends keyof T>={
    [P in K]:T[P]
}
type userR=myPick<userW,'name'|'city'>
//now i can create any obj by using userR type.
