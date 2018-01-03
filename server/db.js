/**
 * Created by junji on 2017/12/27.
 */

const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/vote')

const db = mongoose.connection
db.once('error',()=>console.log('Mongo connection error'))
db.once('open',()=>console.log('Mongo connection successed'))

/****定义模式loginSchema****/
const loginSchema = mongoose.Schema({
  account : String,
  password : String
})

/****定义模型Model****/

const Models = {
  Login : mongoose.model('Login',loginSchema,'Login')
}

module.exports = Models

