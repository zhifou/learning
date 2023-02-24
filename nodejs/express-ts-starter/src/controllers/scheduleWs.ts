export default (ws: any, req: any) => {
    console.log('ws::', req.path)
    ws.send('开始调用')
    // 业务代码
    setInterval(() => {
        ws.send(
            JSON.stringify({
                code: 0,
                msg: '开始调度' + Math.random(),
            })
        )
    }, 3000)
}
