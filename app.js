"use strict";//자바스크립트 만들때 항상 쓰기

//모듈
const express = require("express");
const app = express();//npm으로 설치


//라우팅
const home = require("./routes/home")//라우트 폴더안에 홈폴더 안에있는 자바스크립트를 등록


//앱세팅
app.set("views","./views");
app.set("view engine","ejs");//html같은거, ejs도 npm으로 install


app.use("/",home); //use -> 미들 웨어를 등록해주는 메서드.
//루트(/)경로로 오면 home으로 이동

module.exports = app;//app을 bin폴더로 내보내기위해 씀

package.json