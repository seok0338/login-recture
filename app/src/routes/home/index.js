"use strict";//자바스크립트 만들때 항상 쓰기

const express = require("express");//app,router를 쓰려면 필요
const router = express.Router();//app 대신 router를 씀

const ctrl = require("./home.ctrl");

router.get("/",ctrl.hello);

router.get("/login",ctrl.login);//api


module.exports = router;//외부 파일에도 사용할 수 있게 해줌
