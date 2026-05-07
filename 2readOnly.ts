//readOnly
type myReadOnly<T>={
    readonly[K in keyof T]:T[K];
}
type readOnlyy=myReadOnly<User100>;

