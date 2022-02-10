"use strict";
const User = require("../../models/User");
//아이디 정보를 저장
const output = {
    hello: (req,res) => {
        res.render("home/index")
    },
    login: (req,res) => {
        res.render("home/login")
    },
    register: (req,res) => {
        res.render("home/register")
    }
};



const process = {
    login: async (req,res) => {
        const user = new User(req.body);//여기에서 받은 req를 user.js에있는 body로 넘겨준다
        const response = await user.login();
        return res.json(response)
    },
    register: async (req, res)=> {
        const user = new User(req.body);//여기에서 받은 req를 user.js에있는 body로 넘겨준다
        const response = await user.register();//2.index에서 받은 정보를 여기서 처리 그리고 user.js로간다
        return res.json(response)
    }
}


module.exports = {
    output,
    process,
};//value값을 쓰지 않아도 밑에 처럼 자동으로 추가됨

//{
//    hello : hello,
//    login : login,
//};
