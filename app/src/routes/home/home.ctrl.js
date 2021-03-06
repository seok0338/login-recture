"use strict";
const logger = require("../../config/logger");
const User = require("../../models/User");
//아이디 정보를 저장
const output = {
    hello: (req,res) => {
        logger.info(`get / 304 "홈 화면으로 이동"`);
        res.render("home/index")
    },
    login: (req,res) => {
        logger.info(`get /login 304 "로그인 화면으로 이동"`);
        res.render("home/login")
    },
    register: (req,res) => {
        logger.info(`get /register 304 "회원가입 화면으로 이동"`);
        res.render("home/register")
    }
};



const process = {
    login: async (req,res) => {
        const user = new User(req.body);//여기에서 받은 req를 user.js에있는 body로 넘겨준다
        const response = await user.login();//2.여기 함수가 실행이되고 user안에있는 로그인 함수가 실행이 된다.
        
        const url = {
            method: "post",
            path: "/login",
            status: response.err ? 409 :201,
        }
        log(response,url);
        return res.status(url.status).json(response)
    },
    register: async (req, res)=> {
        const user = new User(req.body);//여기에서 받은 req를 user.js에있는 body로 넘겨준다
        const response = await user.register();//2.index에서 받은 정보를 여기서 처리 그리고 user.js로간다
        const url = {
            method: "post",
            path: "/register",
            status: response.err ? 409 :201,
        }
        log(response,url);
        return res.status(url.status).json(response)
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
function log(response, url){
    if(response.err){
        logger.error(
            `${url.method} / ${url.path} ${url.status} Response: ${response.success}, ${response.err}`
        );
    }else{
        logger.info(
            `${url.method} / ${url.path} ${url.status} Response: ${response.success}, ${response.msg || ""}`
        );
    }
}