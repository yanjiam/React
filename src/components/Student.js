import React from 'react'

export default function Student(props) {
    //假设所有的学生信息分开传递
    return (
       <li>
           {/* {显示一个学生的所有数据} */}
           {"{"}姓名：{"}"}{props.name},
           【邮箱：】{props.email},
           【性别：】{props.sex === 1 ? "男" : "女"},
           【出生年份：】{props.birth}
       </li>
    )
}
