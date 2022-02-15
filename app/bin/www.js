//실행파일
"use strict";

const app = require("../app");
const logger = require("../src/config/logger")
const port = process.env.PORT || 3000;
app.listen(port,function(){
    logger.info(`${port} 포트에서 서버가 가동되었습니다.`);
});