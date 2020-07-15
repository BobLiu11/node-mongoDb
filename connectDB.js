const mongoose = require('mongoose');
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost/nodeMongoDB');
//设计集合结构
var userSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String
    }
})
//将文档结构发布为模型,第一个参数为集合名（大写名词单数字符串），
//mongoose 会自动将User转为users集合名
//返回值：模型构造函数(可以对User集合中数据进行操作)
const User = mongoose.model('User',userSchema );
//向User集合中添加数据
var admin = new User({
    username:'admin',
    password:'123456',
    email:'admin@admin.com'
})
//保存数据
admin.save(function(err,data){
    if(err){
        console.log(保存失败)
    }else{
        console.log(保存成功)
    }
})


//查询所有数据 返回data数组
User.find(function(err,data){
    if(err){
        console.log(查询失败)
    }else{
        console.log(data)
    }
})
//按条件查询数据 返回data数组,第一个参数为查询条件
User.find({username:'admin'},function(err,data){
    if(err){
        console.log(查询失败)
    }else{
        console.log(data)
    }
})
//只查出符合条件的第一条数据 返回data对象,第一个参数为查询条件
//如果没有条件则查出所有数据，返回data对象
User.findOne({username:'admin'},function(err,data){
    if(err){
        console.log(查询失败)
    }else{
        console.log(data)
    }
})

//按条件删除数据 
User.remove({username:'admin'},function(err,data){
    if(err){
        console.log(删除失败)
    }else{
        console.log(data)
    }
})

//更新数据 第一个参数是id名 第二个参数是要修改的内容
User.findByIdAndUpdate('id名',{password:'123456'},
    function(err,data){
        if(err){
            console.log(更新失败)
        }else{
            console.log(data)
        }
})




