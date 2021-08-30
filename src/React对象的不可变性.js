import React from 'react';
import ReactDOM from 'react-dom';

let num = 1;


// React 不可变性  React元素对象任何地方都不能修改

// Object.freeze(div) 相当于es6中冻结了对象

// const div = (
//   <div>
//     {num}
//   </div>  
// );
// console.log(div);

// div.props.children = 2;

// console.log(div);

// ReactDOM.render(div, document.getElementById("root"));

// 想改动 只能重新渲染
setInterval(() => {
  num++;
  const div = (
    <div>
      {num}
    </div>
  );
ReactDOM.render(div, document.getElementById("root"));
}, 1000)

//重新渲染会不会降低效率啊？
//不会，因为本质时创建对象，创建对象消耗很低
//而且尽管每一秒我们都会新建一个描述整个 UI 树的元素，React DOM 只会更新实际改变了的内容