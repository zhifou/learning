/**
 * Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。createPortal 可以把当前组件或 element 元素的子节点，渲染到组件之外的其他地方。
那么具体应用到什么场景呢？
比如一些全局的弹窗组件model,<Model/>组件一般都写在我们的组件内部，倒是真正挂载的dom，都是在外层容器，比如body上。此时就很适合createPortalAPI。
createPortal接受两个参数：
第一个： child 是任何可渲染的 React 子元素
第二个： container是一个 DOM 元素。

 */
import React, {useRef, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function WrapComponent({children}) {
    const domRef = useRef(null);
    const [PortalComponent, setPortalComponent] = useState(null)
    
    useEffect(() => {
        setPortalComponent(ReactDOM.createPortal(children, domRef.current))
    }, [])

    return <div>
        <div className="container" ref={domRef}>3333</div>
        {PortalComponent}
    </div>
}

class Index extends React.Component {
    render() {
        return <div style={{marginTop: '50px'}}>
            <WrapComponent>
                <div>Hello World</div>
            </WrapComponent>
        </div>
    }
}

export default Index;