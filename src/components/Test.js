import React, { Component } from 'react'
import Modal from './common/Modal/index'

export default class Test extends Component {

    state = {
        showModal: false
    }

    changeModalState = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showModal ?
                        (<Modal onClose = {this.changeModalState}>
                            <div style={{
                                background: '#fff'
                            }}>
                            <button onClick={this.changeModalState}>X</button>
                            <h1>aaa</h1>
                            </div>
                        </Modal>) :
                        null
                }
                <button onClick={this.changeModalState}>显示蒙层</button>
            </div>
        )
    }
}
