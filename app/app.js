//메인 파일겸 각종 설정들
//src는 mvc패턴으로 구성을 했다.
"use strict";//자바스크립트 만들때 항상 쓰기

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");//이거를 사용하게되면 mac이든 window든 동일하게 환경변수를 등록하고 가져올수 있게 되낟

const app = express();//npm으로 express설치
dotenv.config();//config라는 메소드를 통해 환경변수(dotenv) 모듈이 동작을 하게된다



//라우팅
const home = require("./src/routes/home");//라우트 폴더안에 홈폴더 안에있는 자바스크립트를 등록
const logger = require("./src/config/logger");



//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");//html같은거, ejs도 npm으로 install
app.use(express.static(`${__dirname}/src/public`))//login.js를 활용하기 위한 미들웨어
//__dirname는 현재 app.js가 있는 위치를 반환해줌

app.use(bodyParser.json());//express의 미들웨어
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",home); //use -> 미들 웨어를 등록해주는 메서드.
//루트(/)경로로 오면 home으로 이동
module.exports = app;//app을 bin폴더로 내보내기위해 씀

