import React from 'react';
import ReactDOM from 'react-dom';

const a = 1234, b = 4321;
const arr = [2,3,4,5,6,7];
// const obj = {
//   a: 1,
//   b: 2,
// };
const obj1 = <span>React元素对象</span>;
const div = (
  <div>
    {/* 以下三条表达式不会产生任何输出 */}
    {undefined}
    {null}
    {false}
    {/* 普通对象不能作为子元素 */}
    {/* {obj} */}
    {/* 但是可以放置React元素对象 */}
    {obj1}
    {/* 可以放置数组，数组遍历每一项作为React元素的子元素 */}
    {arr}
    {a} * {b} = {a*b}
  </div>
);
// const div = React.createElement("div", {}, `${a} * ${b} = ${a*b}`); //相等
ReactDOM.render(div, document.getElementById('root'));

// JSX语法会防止xss注入攻击 敏感信息会自动编码 不想自动编码可以使用  dangerouslySetInnerHTML= {{ __html: content}} 属性 加在标签上 就不会编码了 content 为要加入的内容