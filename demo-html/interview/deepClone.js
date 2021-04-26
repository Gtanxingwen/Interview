// 忽略undefined
// 忽略Symbol
// 不能序列化
// 不能解决循环引用问题
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 进阶版
function clone(obj) {
  return new Promise((resolve, reject) => {
    const {port1, port2} = new MessageChannel()
    port2.onmessage = ev => resolve(ev.data)
    port1.postMessage(obj)
  })
}

// 使用
let myObj = {}
(async () => {
  const cloneObj = await clone(myObj)
})()
