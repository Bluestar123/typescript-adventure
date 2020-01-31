const getFullName = ({firstName, lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}

getFullName({
    firstName: 'aa',
    lastName: 'bb'
})

interface NameInfo {
    firstName: string,
    lastName: string
}

interface Vegetable {
    color?: string,
    type: string,
    // [prop: string]: any  多传入参数处理方法
}
const getVegetables = ({color, type}: Vegetable) => {
    return `A ${color ? (color + ' ') : ''}${type}`
}

// console.log(getVegetables({
//     color: 'red',
//     type: 'aaa',
//     size: 12
// } as Vegetable))多传入参数处理方法

// 类型兼容性   多属性给少属性赋值
const VINFO = {
    color: 'red',
    type: 'aa',
    size: 22
}
console.log(getVegetables(VINFO))


// 定义数组
interface ArrInter {
    0: number,
    readonly 1: string
}
let arr: ArrInter = [123, 'sdf']

// 函数
type AddFunc = (num1: number, num2: number) => number
interface Func {
    (num1: number, num2: number): number,
    name: string
}