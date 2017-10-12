var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index',{title:'Express'});
})

router.get('/reg',function(req,res){
    res.render('reg',{title:'register'})
})

router.post('/reg',function(req,res){
    
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

app.get('/logout',function(req,res){
    
})

module.exports = router;
