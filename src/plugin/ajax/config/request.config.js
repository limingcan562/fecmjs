// default config
export default {
    type: 'post', // 请求类型（默认post）
    debug: 1, // 是否开启调试
    headers: { // 设置请求头
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    url: '', // 请求地址
    data: {}, // 请求参数
    async: true, // 是否异步
    timeout: 3000, // 超时时间
    success: () => console.log('interface success'), // 状态码200 成功
    fail: () => console.log('interface fail'), // 状态码非200 失败
    always: () => console.log('interface always'), // 成功失败都会触发的函数
    timeoutFn: () => console.log('interface timeout'), // 超时函数
    error: () => console.log('interface error'), // 出错函数
}