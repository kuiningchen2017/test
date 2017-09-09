/**
 * Created by Administrator on 2017/8/26.
 */
// 引入express模块
const express = require('express')
// 引入一个body-parser的解析post请求体中参数的中间件
const bodyParser = require('body-parser')
//引入路由文件
const router = require('./router')
// 获取express服务器对象 保存到一个叫app的常量中
const app = express()
// 配置body-parser中间件
app.use(bodyParser.urlencoded({extend:false}))
//处理json数据
app.use(bodyParser.json())
// 以中间件的形式使路由文件生效
app.use(router)
// 配置静态资源
app.use(express.static('public'))
// 创建一个get方法的路由
// app.get('/get',(req,res)=>{
//     console.log(req.query.xxx) // 获取请求信息
//     res.cookie('username','wuk',{maxAge:1000000}) //设置cookie给浏览器   并且设置了有效时间
//     res.send('cookie已经发送给浏览器')
// })
// 创建一个post方法的路由
// app.post('/post',(req,res)=>{
//     console.log(req.body.xxx) // post方法需要引入中间件body-parser来解析请求体中的内容 这是与get方法的区别
//     res.cookie('username','zbj')
//     res.send('cookie已经发送给浏览器')
// })
// 启动服务器
app.listen(3000,function(){
    console.log('服务器已经启动了')
})