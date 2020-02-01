class Point {
    x: number
    y: number
    constructor (x: number, y: number) {
        this.x = x
        this.y = y
    }
    getPosition () {
        return `(${this.x}, ${this.y})`
    }
}
const p = new Point(1, 2)
// console.log(p.getPosition())

class Parent {
    name: string
    constructor (name: string) {
        this.name = name
    }
}
class Child extends Parent {
    constructor() {
        super('123')
    }
}

// public

// private 私有的
class Private {
    private age: number
    constructor (age: number) {
        this.age = age
    }
}

const pri = new Private(15)
// console.log(pri.age)

class PrivateChild extends Private {
    constructor(age: number) {
        super(age)
        // console.log(super.age)
    }
}

// protected 受保护的
class Protected {
    protected age: number

    // constructor 前加上 protected 就不能创建实例了
    constructor(age: number) {
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}
let pro = new Protected(11)

class ProtectedChild extends Protected {
    constructor(age: number) {
        super(age)
        // super 只能访问父类的公共方法和受保护方法
        // console.log(super.age) error
        // console.log(super.getAge()) 正确
    }
}

class Info {
    name: string
    age?: number
    // 通过参数属性 public 添加到实例上了
    constructor(name: string, age?:number, public sex?: string) {
        this.name = name
        this.age = age
    }
}

// 抽象类
abstract class People {
    constructor(public name: string) {}
    public abstract printName(): void
}

class Man extends People {
    constructor(name: string) {
        super(name)
        this.name = name
    }
    // 实现 printName 方法就可以继承
    printName(): void {
        console.log(this.name)
    }
}

// 类 存取器  get set
abstract class Human {
    public abstract _name: string
    abstract get insideName(): string
    abstract set insideName(value: string) // 不写返回值
}

// 接口和类  ，类可以实现接口

// interface N<T> {
//     new(): T
// }

// 意思  实例之后 返回的类型是本身
const create = <T>(c: new() => T): T => {
    return new c()
}
class Infos {
    age: number
}
create<Infos>(Infos)

// 用类创建实例， 实例的类型是这个类