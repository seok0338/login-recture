"use strict";

//html에 쓴 값을 가져오는 역할

const id = document.querySelector("#id"),//#은 id로 선언된 것의 앞에 써줌
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
//ejs때문에 null값이 나오니까 login.ejs에 login.js로 오는 경로 에 defer를 써주면 된다.

loginBtn.addEventListener("click",login);//로그인 버튼이 click이라는 이벤트가 발생하면 로그인


function login(){
    //value는 웹사이트에서 쓴 값을 가져오는 역할을 해줌
    const req = {
        id : id.value,
        psword : psword.value,
    };
    //정보를 서버에 전달해줌
    console.log(req);
    
}