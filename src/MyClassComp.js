import React from 'react'

export default class MyClassComp extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return <h1>类组件内容 {this.props.number}</h1>
    }
}