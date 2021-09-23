import React from 'react'
import './index.css'

export default function index(props) {
    const defaultProps = {
        leftWidth: 200, //左侧宽度
        rightWidth: 200, //右侧宽度
        minWidth: 800, //最小宽度
        gap: 0, //间隙
    }
    const datas = Object.assign({}, defaultProps, props);
    return (
        <div className="three-layout" style={{
            minWidth: datas.minWidth
        }}>
            <div className="main" style={{
                textAlign: datas.positionMain || 'unset'
            }}>
                {props.children}
            </div>
            <div className="aside-left" style={{
                width: datas.leftWidth,
                marginRight: datas.gap,
                textAlign: datas.positionLeft || 'unset'
            }}>
                {props.left}
            </div>
            <div className="aside-right" style={{
                width: datas.rightWidth,
                marginLeft: datas.gap,
                textAlign: datas.positionRight || 'unset'
            }}>
                {props.right}
            </div>
        </div>
    )
}
