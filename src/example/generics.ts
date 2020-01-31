interface ValueWithLength {
    length: number
}

const getArray = <T extends ValueWithLength>(arg: T, times): T[] {
    return new Array(times).fill(arg)
}
// getArray(123, 5)
getArray({
    length:3
}, 4)
// 属性 限制
const getProps = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}
let object = {
    a: 'a',
    b: 'b'
}
getProps(object, 'a')
// getProps(object, 'c')