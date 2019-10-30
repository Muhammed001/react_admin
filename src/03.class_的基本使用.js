function Person(name, age) {
    this.name = name
    this.age = age
}

const p1 = new Person("王多鱼", 18)
// console.log(p1)
//通过new出来的的实例属性叫做【实例属性】
// console.log(p1.name) 

//【静态属性】：通过构造器直接访问的属性，叫做静态属性
Person.info='静态属性' //info直接挂载给了构造函数，所以是静态属性
console.log(p1.info)
console.log(Person.info)
//-----------------华丽丽的分割线-------------------
console.log('-----------------华丽丽的分割线-------------------')

//1.创建一个动物类
class Anlmal {
    //类中的构造器
    //每一个类中都有一个构造器
    //如果没有手动添加构造器就可以认为每个类中有一个隐形的构造器
    //构造器作用：每次new这个类的时候，必然优先执行 构造器中的代码
    constructor(name,age){
        this.name=name
        this.age=age
    }

    static info='静态属性'
 }

const a1 = new Anlmal('富贵',3)

console.log(a1.info)
console.log(Anlmal.info)


