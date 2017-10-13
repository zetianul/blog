var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index',{title:'Express'});
})

router.get('/reg',function(req,res){
    res.render('reg',{title:'register'})
})

router.post('/reg',function(req,res){
    var name = req.body.name,
        password = req.body.password,
        password_re = req.body['password-repeat'];
    //检验用户两次输入的密码是否一致
    if (password_re != password) {
    req.flash('error', '两次输入的密码不一致!'); 
    return res.redirect('/reg');//返回注册页
    }
    //生成密码的 md5 值
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body.password).digest('hex');
    var newUser = new User({
        name: name,
        password: password,
        email: req.body.email
    });
    //检查用户名是否已经存在 
    User.get(newUser.name, function (err, user) {
    if (err) {
        req.flash('error', err);
        return res.redirect('/');
    }
    if (user) {
        req.flash('error', '用户已存在!');
        return res.redirect('/reg');//返回注册页
    }
    //如果不存在则新增用户
    newUser.save(function (err, user) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/reg');//注册失败返回主册页
        }
        req.session.user = user;//用户信息存入 session
        req.flash('success', '注册成功!');
        res.redirect('/');//注册成功后返回主页
    });
    });
})

router.get('/login',function(req,res){
    res.render('login',{title:'login'});
})

router.post('/login',function(req,res){

})

router.get('/post',function(req,res){
    res.render('post',{title:'post'});
})

router.post('/post',function(req,res){

})

router.get('/logout',function(req,res){
    
})

module.exports = router;
