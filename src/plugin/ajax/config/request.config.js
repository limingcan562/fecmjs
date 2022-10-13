// request config
export default {
    type: 'post', // 请求类型（默认post）
    debug: 0, // 是否开启调试
    debugStep: 0, // 是否开启xhr连接4个步骤的打印，方便调试
    headers: { // 设置请求头
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    url: '', // 请求地址
    data: {}, // 请求参数
    async: true, // 是否异步
    timeout: 3000, // 超时时间
    success: () => {}, // 状态码200 成功
    fail: () => {}, // 状态码非200 失败
    always: () => {}, // 成功失败都会触发的函数
    timeoutFn: () => {}, // 超时函数
    error: () => {}, // 出错函数
}