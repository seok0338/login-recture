"use strict";


//html에 쓴 값을 가져오는 역할

const id = document.querySelector("#id"),//#은 id로 선언된 것의 앞에 써줌
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    conformPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");
    //ejs때문에 null값이 나오니까 register.ejs에 register.js로 오는 경로 에 defer를 써주면 된다.


registerBtn.addEventListener("click",register);//로그인 버튼이 click이라는 이벤트가 발생하면 로그인


function register(){
    //value는 웹사이트에서 쓴 값을 가져오는 역할을 해줌
    if (!id.value) return alert("아이디를 입력해 주세요");
    if (psword.value !== conformPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    
    
    const req = {
        id : id.value,
        name: name.value,
        psword : psword.value,
    };
    
    //정보를 서버에 전달해줌//api
    //register html과 연결해주는 역할 register 정보를 ctrl로 전달
    fetch("/register",{//fetch는 promises를 반환해주는 역할을 한다.
        method: "POST",//rest api에 관련된 데이터를 서버에서 받으려면 이게 필요
        headers: {
            "Content-Type":"application/json"//내가 요청하는 데이터가 json 데이터라는 것을 알려줌
        },
        body: JSON.stringify(req)//srtngify는 req를 문자열로 바꿔주는 역할, 이거는 내용을 받아 옮갸주는 역할
    }).then((res) => res.json())//json으로 서버의 응답을 다 받음
      .then((res) => {
        if(res.success){
            location.href = "/login";//home.ctrl의 res.success가 true이면 "/login"링크로 보내줌
        }else{
            if (res.err) return alert(res,err);
            alert(res.msg)//서버에서 전달한 매세지를 띄우는것 alert은 알리다라는 뜻

        }
      })
    //then으로 정보를 한번가져오고 then을 한번더써서 promis
    .catch((err) => {
        console.error(new Error("회원가입 중 레어 발생"));
    });
}