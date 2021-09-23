import React, { Component } from 'react'
// import Numberinput from './components/Numberinput'

export default class App extends Component {

    state = {
        val: "123",
        loves: ['足球', '篮球', '排球', '羽毛球', '乒乓球'],
        chooseLoves: ['篮球', '羽毛球']
    }

    render() {
        // <div>
        //     {/* 默认情况下，它是一个非受控组件 */}
        //     {/* <input type="text" /> */}

        //     <input type="text" value={this.state.val} onChange={e => {
        //         this.setState({
        //             val: e.target.value
        //         })
        //     }} />

        //     <button onClick={() => {
        //         console.log(this.state.val);
        //     }}>获取文本框的值</button>
        // </div>

        // <Numberinput />

        const checkboxes = this.state.loves.map(it => (
            <label key={it}>
                <input
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(it)}
                    onChange={e => {
                        if (e.target.checked) {
                            this.setState({
                                chooseLoves: [...this.state.chooseLoves, it]
                            })
                        } else {
                            this.setState({
                                chooseLoves: this.state.chooseLoves.filter(i => i !== it)
                            })
                        }
                    }} />
                    {it}
            </label>
        ))
        return (
            <div>
                {checkboxes}
                <button onClick={
                    console.log(this.state.chooseLoves)
                }>获取选中元素</button>
            </div>
            
        )
    }
}
