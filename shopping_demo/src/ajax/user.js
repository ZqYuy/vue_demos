// 这是ajax层
// 访问后台   拿到数据传递给actions
// 使用axios异步获取数据
import axios from 'axios'
// 其中cb是一个回调函数

export default {
  getUsers (cb) {
    // 通过ajax去访问后台数据接口
    axios({
      url: 'http://localhost:3000/api/user',
      method: 'get'
    }).then(resp => {
      // 数据以回调函数参数的形式返回
      console.log(resp.data)
      cb(resp.data)
    })
  }
}
