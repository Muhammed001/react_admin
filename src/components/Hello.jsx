import React from 'react'  //创建组件，虚拟Dom,生命周期
//第一种创建主件的方式
export default function Hello(props) {
    //如果在一个组件中return null表示该组件什么都不渲染
    // return null
    //语法总必须返回一个合法的JSX虚拟Dom
    console.log(props)
    return  <p>Hello , world ---{props.name} ---{props.age} ---{props.gender}</p>
    //不论是vue还是react组件中的props永远都是只读的，不能被重新赋值
}

//把主件暴露出去
// export default Hello