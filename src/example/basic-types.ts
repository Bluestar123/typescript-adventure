// 布尔类型
let bool: boolean = false // 初始值

// 数字类型
let num: number = 123

num = 0b1111011 // 二进制
num = 0o173 // 八进制
num = 0x7b // 十六进制

// 字符串类型
let str: string
str = 'abc' // 字符串字面量类型
// console.log(123)

// 数组
let arr1: number[]
arr1 = [1,]

let arr2:Array<number|string>
arr2 = [1, 'sdf']
let ar3: (string | number)[]
ar3 = [1, 'sdf']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['a', 3, false]

// 枚举
enum Roles {
    SUPER_ADMIN,
    ADMIN = 10,
    USER
}
console.log(Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER,Roles[0])
let role
if (role === Roles.SUPER_ADMIN) {}//使用

const fn = (text: string): void => {
    console.log(text)
}
fn('123')

let v: void
v = undefined
v = null // 严格模式下 不能赋值报错。非严格模式可以

// never类型 ,任何类型子类型
// 1.
const errorFunc = (message: string): never => {
    throw new Error(message)
}
// 2. 死循环
const infiniteFunc = ((): never => {
    while(true) {}
})()

// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}