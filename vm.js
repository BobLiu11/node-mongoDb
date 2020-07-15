/**
 * vm.js 入口模块
 *   功能：创建服务
 *        做一些服务相关配置
 *              模板引擎  配置时要挂载路由之前
 *              bodyParser解析表单post请求体 配置时要挂载路由之前
 *              提供静态资源服务
 *         挂载路由
 *         监听端口启动服务
 */
var express=require('express')
var router=require('./router')
var bodyParser = require('body-parser')
var app=express()
app.engine('html', require('express-art-template'));
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//对应router.js中的方式一
app.use(router)
//对应router.js中的方式二
//router(app)

app.listen(3000,function(){
    console.log('port 3000 is running...')
})