"use strict";
//아이디 정보를 저장

const output = {
    hello: (req,res) => {
        res.render("home/index")
    },
    login: (req,res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["민석","ㅎㅎ","ㅁㄴㅇㄹ"],
    psword: ["123","456","1245"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if(users.id.includes(id)){//users의 id가 프론트에 있는 id와 같다면
            const idx = users.id.indexOf(id);// users에 있는 id의 인덱스를 idx에저장
            if(users.psword[idx] === psword) {//users의 패스워드가 프론트에 psword와 같은지
                return res.json({
                    success: true,//로그인이 성공하면 success: ture라는 걸 json으로 응답해준다
                })
            }
        }

        return res.json({
            success: false,
            msg:"로그인에 실퍄하였습니다."//로그인에 실패
        });
    },
}


module.exports = {
    output,
    process,
};//value값을 쓰지 않아도 밑에 처럼 자동으로 추가됨

//{
//    hello : hello,
//    login : login,
//};