enum Test{
    error = 'aaaa',
    success = 'bbbb'
}
console.log(Test)

enum Status {
    Off,
    On
}

interface Light {
    status: Status
}
const light: Light = {
    status: Status.On
}
console.log(light) // 1

const enum Code {
    success = 200,
    error = 500
}
let code = Code.success
console.log(code)