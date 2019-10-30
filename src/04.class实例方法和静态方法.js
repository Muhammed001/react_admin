function Person(name, age) {
    this.name = name
    this.age = age
}

//实例方法
Person.prototype.say = function () {
    console.log('Persion的实例方法')
}

//静态方法
Person.eat = function () {
    console.log('Persion的静态方法')
}

const p1 = new Person("王多鱼", 18)
p1.say();
Person.eat()

//-----------------华丽丽的分割线-------------------
console.log('-----------------华丽丽的分割线-------------------')

//1.创建一个动物类
class Anlmal {
    //类中的构造器
    //每一个类中都有一个构造器
    //如果没有手动添加构造器就可以认为每个类中有一个隐形的构造器
    //构造器作用：每次new这个类的时候，必然优先执行 构造器中的代码
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    //这个实例方法今后会用到很多
    say() {
        console.log('动物的实例方法')
    }
    static info = '静态属性'
    static eat() {
        console.log('Anlmal的静态方法')
    }
}

const a1 = new Anlmal('富贵', 3)

console.log(a1)
a1.say() //这事挂载在实例原型上的实例方法
Anlmal.eat()

