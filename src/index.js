import React from 'react'  //创建组件，虚拟Dom,生命周期
import ReactDom from 'react-dom' //把创建好的组件和虚拟Dom放到页面上展视
import Hello from './components/Hello.jsx'

const dog={
    name:"富贵",
    age:2,
    gender:"母"
}

ReactDom.render(
    <div>
        <Hello {...dog}></Hello>
    </div>,
    document.getElementById('app')
)