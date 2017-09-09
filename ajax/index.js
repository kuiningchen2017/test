const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/testAjax',(req,res)=>{
    //console.log(req.query.xxx)
    //let user = {name:'wuk',age:18}
    //res.send(user)
})

app.listen(3000,function(){
    console.log('服务器已经启动~~')
})
