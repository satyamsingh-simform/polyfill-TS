
//4.Record<K,T>
type myRecord<K extends keyof any,T>={
    [P in K]:T;
}
type myObj=myRecord<1|'age',string>
//boolean' does not satisfy the constraint 'string | number | symbol'
type myObj2=myRecord<true|'age',string> //that is were keyof any is doing it role

const obj:myObj={
    1:'satya',
    age:'20',
}
