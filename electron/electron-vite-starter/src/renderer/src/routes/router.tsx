/**
 * @file router
 * @author zhaoyadong (zhaoyadong@baidu.com)
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@renderer/pages/Home'
import Tools from '@renderer/pages/Tools'

/**
 * 根路由定义 目前子站点使用的路由不能在这里重复使用，包括：x-map | x-ov | x-editor | x-preview
 * @param {*} props
 * @returns
 */
const BasicRoute = (props: any) => {
  console.log('BasicRoute::props', props)
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path={'tools/*'} element={<Tools />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default BasicRoute
