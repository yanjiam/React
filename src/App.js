import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'

export default function App() {
    return (
        <div>
            <ThreeLayout
                gap={50}
                leftWidth={200}
                rightWidth={200}
                minWidth={800} //最小宽度
                positionLeft='left' //左侧内容排列规则 left center right
                positionRight='right' //右侧内容排列规则 left center right
                positionMain='center' //主区域内容排列规则 left center right
                left={
                    <h1>左边</h1>
                }
                right={
                    <h1>右边</h1>
                }
            >
                <h1>主区域</h1>
            </ThreeLayout>
        </div>
    )
}
