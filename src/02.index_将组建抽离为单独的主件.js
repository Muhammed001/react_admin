import React from 'react'  //创建组件，虚拟Dom,生命周期
import ReactDom from 'react-dom' //把创建好的组件和虚拟Dom放到页面上展视

//注意这里的@符号表示项目根目录src这一层
import Hello from '@/components/Hello'

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