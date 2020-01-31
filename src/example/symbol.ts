// 基本数据类型 ,唯一性不可能相同
const s1 = Symbol()
console.log(s1)

// symbol 不能用于计算
const s2 = Symbol(123) // 自动转成'123'
const s3 = Symbol({} as string)
console.log(s3)

console.log(s2, s2.toString())
console.log(Boolean(s2)) // true
console.log(!s2) // false  隐式转换

let prop = 'name'
const obj = {
    name: 'Aaron',
    [prop]: '123', // 变量当key
    [`my${prop}is`]: '564',
    [s2]: 'uncertainty'
}
console.log(obj[s2]) // 不能用. 属性调用

for (const key in obj) {
    console.log(key)  // symbol key值打印不出来
}
// symbol key值打印不出来
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))

// 获取属性名为 symbol的
console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))

// -----------
const s8 = Symbol.for('aa') // 现在全局找一下有没有aa的值，有的话直接返回symbol对象
const s9 = Symbol.for('aa')
// console.log(s8, s8 === s9) // 浏览器中true
console.log(Symbol.keyFor(s8)) // aa  ,传入用symbol.for创建的symbol对象，返回相应的传入值
