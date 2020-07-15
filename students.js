const mongoose = require('mongoose');
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost/nodeMongoDB');
//设计集合结构
var sudentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number
    },
    hobby:{
        type:String
    }
})
module.exports = mongoose.model('Student',sudentSchema );
