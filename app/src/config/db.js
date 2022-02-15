//데이터베이스 설정하는 곳
const mysql = require("mysql");
const db = mysql.createConnection({//이 안에 데이터베이스의 설정들을 입력해준다.
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(); //이 위에 해당 연결을 connect로 요청한다.

module.exports = db; //이 해당모듈을 외부에서 사용할 수 있게 해준다
