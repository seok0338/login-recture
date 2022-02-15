"use strict";//자바스크립트 만들때 항상 쓰기

const express = require("express");//app,router를 쓰려면 필요
const router = express.Router();//app 대신 router를 씀

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.hello);
router.get("/login",ctrl.output.login);//api
router.get("/register",ctrl.output.register);


router.post("/login",ctrl.process.login);//1. 로그인 버튼을 누르는 순간 로그인 메소드로 post요청이가게된다. 그리고crlt에 있는 login 함수가 실행이된다. 
router.post("/register",ctrl.process.register);//1.정보가 들어오면 ctrl의 register함수로 이동한다.

module.exports = router;//외부 파일에도 사용할 수 있게 해줌
