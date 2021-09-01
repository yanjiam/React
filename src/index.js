import React from 'react'
import ReactDOM from 'react-dom'
import TickControl from './components/TickControl'

// function handelClick(e) {
//     console.log("点击了");
// }

// const btn = <button onClick={handelClick} onMouseEnter={() => {
//     console.log("鼠标移入了")
// }}>点击我</button>

ReactDOM.render(<TickControl/>, document.getElementById("root"));