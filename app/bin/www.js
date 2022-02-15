//실행파일
"use strict";

const app = require("../app");
const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("서버가동");
});