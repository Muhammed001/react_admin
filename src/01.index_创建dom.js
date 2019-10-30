// 
// console.log("假设是打包入口！");

//1.导入时的成员名称
import React from 'react'  //创建组件，虚拟Dom,生命周期
import ReactDom from 'react-dom' //把创建好的组件和虚拟Dom放到页面上展视

//2.创建虚拟Dom元素
//参数1：创建元素的类型，字符串，表示元素的名称
//参数2：是一个对象或者null,表示当前Dom的属性
//参数3：子节点（包括 其他 虚拟Dom 获取 文本子节点）
//参数n:其他子节点
// const myh1=React.createElement=('h1',{id:'firshH1',title:'创建的h1标签'},'创建的h1标签')
// const mydiv=React.createElement=('div',{id:'firshDiv',title:'创建的div标签'},'这是div元素',myh1)

//编写类HTML代码（使用babel来转换Js中的标签）叫做jsx语法（符合xml规范的js）
//jsx语法本质，在运行的时候被转成了React.createElement形式来执行
const myTest = <div>这是类html文件代码</div>
let test_num_01 = 10
const test_dom_01 = [<h1>h1Dom</h1>, <hr />, <h3>h3Dom</h3>]
const arrname=["老王","刘主任","一休","发哥","钗"];

//数组的map方法（注意：react中需要把key添加给被forEach或map或for循环直接控制的元素）
const arrStr=arrname.map(item=>{
    return <h5 key={item}>{item}</h5>
})
console.log(arrStr)

//3.使用ReactDom将虚拟Dom渲染到页面上
//参数1：要渲染的Dom
//参数2：指定页面上一个容器(是一个DOM元素)
ReactDom.render(
    <div>
        <hr />
        {test_num_01}
        <hr />
        {test_num_01 + 12}
        {/* <hr />
        {test_dom_01} */}
        <hr />
        {arrStr}
        <hr />
        <p className="myEle">!!!!!!!!!!!!!</p>
    </div>
    , document.getElementById('app')) 