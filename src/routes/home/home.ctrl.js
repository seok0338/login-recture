"use strict";
function hello(req,res){
    res.render("home/index")
}
function login(req,res){
    res.render("home/login")
}

module.exports = {
    hello,
    login,
};//value값을 쓰지 않아도 밑에 처럼 자동으로 추가됨

//{
//    hello : hello,
//    login : login,
//};