import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComponent';
import MyClassComp from './MyClassComp';

//组件名称开头大写
// function MyFuncComp () {
//   return <h1>组件内容</h1>;
// }
//使用组件，生成的，仍然是一个React元素，只是type不同。
//小写生成普通React元素,大写会生成React组件元素

ReactDOM.render(
  <div>
    <MyFuncComp number="1"/>
    <MyFuncComp number={2}/>
    <MyClassComp number={2}/>
  </div>,document.getElementById("root"));