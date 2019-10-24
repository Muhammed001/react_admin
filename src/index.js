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
const myTest=<div>这是类html文件代码</div>

//3.使用ReactDom将虚拟Dom渲染到页面上
//参数1：要渲染的Dom
//参数2：指定页面上一个容器(是一个DOM元素)
ReactDom.render(myTest,document.getElementById('app'))
//Uncaught Error: Target container is not a DOM element.    