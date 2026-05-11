//13.InstanceType<T> It extracts the instance type from a constructor/class
type MyInstanceType<T extends new (...args:any[])=>any>=T extends new(...args:any[])=>infer R ?R :never
