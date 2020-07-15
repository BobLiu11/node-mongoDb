/**
 * router.js 路由模块
 */
var fs=require('fs')

// var Student=require('./student')
var Student=require('./students')
//方式一
var express=require('express')
//创建路由容器
var router=express.Router()
//查
router.get('/students',function(req,res){
        //方式一
        // fs.readFile('./db.json','utf8',function(err,data){
        //     //utf8将二进制数据转成字符串，类似toString()方法
        //     //从文件中读取的数据一定是字符串
        //     if(err){
        //         return res.status(500).send('Server error.')
        //     }
        //     res.render('vm.html',{
        //         friuts:[
        //                     '苹果',
        //                     '橘子',
        //                     '香蕉'
        //                 ],
        //         //JSON.parse()将字符串转为数组
        //         student:JSON.parse(data).student
        //     })
        // })
        //方式二
        Student.find(function(err,data){
            if(err){
                return res.status(500).send('Server error.')
            }
            res.render('vm.html',{
                friuts:[
                            '苹果',
                            '橘子',
                            '香蕉'
                        ],
                students:data
            })
        })
    })
 //添加学生(增)
router.get('/students/new',function(req,res){
        res.render('new.html')
})
router.post('/students/new',function(req,res){
    new Student(req.body).save(function(err,data){
        if(err){
           return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })

    // Student.save(req.body,function(err){
    //         if(err){
    //             return res.status(500).send('Server error.')
    //         }
    //         res.redirect('/students')
    // }) 
})
//编辑学生(改)
router.get('/students/edit',function(req,res){
    Student.findById(req.query.id,function(err,data){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.render('edit.html',{
            data:data
        })
    })
})
router.post('/students/edit',function(req,res){
    Student.findByIdAndUpdate(req.body.id,req.body,function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
//删除学生(删)
router.get('/students/delete',function(req,res){
    Student.findOneAndRemove(req.body.id,function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
// router.post('/students/delete',function(req,res){
//     Student.update(req.body,function(err){
//         if(err){
//             return res.status(500).send('Server error.')
//         }
//         res.redirect('/students')
//     })
// })
module.exports=router
//方式二
// module.exports=function(app){
//     //配置post请求
//     app.use(bodyParser.urlencoded({ extended: false }))
//     app.use(bodyParser.json())
//     //查
//     app.get('/students',function(req,res){
//         fs.readFile('./db.json','utf8',function(err,data){
//             //utf8将二进制数据转成字符串，类似toString()方法
//             //从文件中读取的数据一定是字符串
//             if(err){
//                 return res.status(500).send('Server error.')
//             }
//             res.render('vm.html',{
//                 friuts:[
//                             '苹果',
//                             '橘子',
//                             '香蕉'
//                         ],
//                 //JSON.parse()将字符串转为数组
//                 student:JSON.parse(data).student
//             })
//         })
//     })

