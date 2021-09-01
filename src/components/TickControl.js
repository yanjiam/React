import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {

    state = {
        isOver: false //倒计时是否完成
    }

    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //     this.handleOver = this.handleOver.bind(this); //1. 效率高
    // }

    // handleClick() {
    //     console.log("点击了！");
    // }

    // handleOver() {
    //     this.setState({
    //         isOver: true
    //     })
    // }

    //结果：handleClick不在原型上，而在对象上
    // 3.箭头函数 下面是 js next 的语法
    handleClick = () => {
        console.log("点击了！");
    }

    handleOver = () => {
        this.setState({
            isOver: true
        })
    }

    render() {
        let status = "正在倒计时";
        if (this.state.isOver) {
            status = "倒计时完成";
        }
        return (
            <div>
                <Tick 
                    // onClick={this.handelClick.bind(this)}
                    // onOver={this.handleOver.bind(this)} //2. 每次重新渲染都会产生新的函数
                    onClick={this.handleClick}
                    onOver={this.handleOver} 
                    number={10} 
                />
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}