"use script";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login(){//async는 await을 사용해주기위해 씀
        const client = this.body
        const {id,psword} = await UserStorage.getUserInfo(client.id);//await은 .then대신에 쓰는거
        if(id){
            if (id === client.id && psword === client.psword){
                return {success: true};
            }
            return {success: false,msg: "비밀번호가 틀렸습니다."}
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."}
    }

    async register(){//3. 여기서 userstorage의 save메소드 실행
        const client = this.body
        try{//async에서 에러잡는법, 
            const response = await UserStorage.save(client);
            //중복된 아이디 입니다 라는 문장을 response에 넘
            return response
        } catch(err){
            return {success:false, msg:err};
        }
    }

}

module.exports = User;