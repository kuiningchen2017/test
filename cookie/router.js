/**
 * Created by Administrator on 2017/8/26.
 */
// 创建一个路由的js文件
const express = require('express')
const router = express.Router()

router.get('/get',(req,res)=>{
    console.log(req.query.xxx)
    res.cookie('username','suk',{maxAge:10000000})
    res.send('cookie已经发送给浏览器')
})
router.post('/post',(req,res)=>{
    console.log(req.body.xxx)
    res.cookie('username','zbj')
    res.send('cookie已经发送给浏览器')
})
module.exports = router
