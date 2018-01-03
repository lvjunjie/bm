/**
 * Created by junji on 2017/12/27.
 */

const models = require('./db')
const express = require('express')

const router = express.Router()

//创建账号接口
router.post('/api/login/createAccount',(req,res)=>{

  let newAccount = new models.Login({
    account : req.body.account,
    password : req.body.password
  })

  //保存数据 newAccount 进 mongoDB

  newAccount.save((err,data)=>{
    if(err){
      res.send(err)
    }else {
      res.send('createAccount successed')
    }
  })
})


//获取已有账号接口

router.get('/api/login/getAccount',(req,res)=>{
  //通过模型去查找数据库
  models.Login.find({},(err,data)=>{

    if(err){
      res.send(err)
    }else {
      res.send(data)
    }
  })

})

module.exports = router;
