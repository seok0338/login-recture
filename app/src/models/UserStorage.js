"use script";

const fs = require("fs").promises;
//promises는 수행하는 동작이 끝남과 동시네 상태를 알려주기 때문에
//비동기 처리에 아주 효과적이다.

class UserStorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users)// => [id,psword,name]
        const userInfo = usersKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static #getUsers(data,isAll,fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            //reduce는 배열의 메소드 반복문임 필드에있는 원소를 하나씩 순회됨
            if (users.hasOwnProperty(field)){//이 users에 해당하는 키값이 있는지 물어보는것
                newUsers[field] = users[field];
            }
            return newUsers;//users의 field가 newUsers의 filed에 들어가고 그게 계속 반복
        },{})//이 오브젝트가 newUsers에 들어간다;
        return newUsers;
    }

    static getUsers(isAll,...fields) {//users의 정보를 모두 불러오는 메소드
        return fs
            .readFile("./src/databases/users.json")//user.js 에 login()안에 UserStorage.getUserInfo(client.id);로 반환해준다
            .then((data) =>{//이 로직이 성공했을때 실행됨
                return this.#getUsers(data, isAll,fields);
            })
            
        .catch(console.error);


    }

    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")//user.js 에 login()안에 UserStorage.getUserInfo(client.id);로 반환해준다
            .then((data) =>{//이 로직이 성공했을때 실행됨
                return this.#getUserInfo(data, id);
            })
            
        .catch(console.error);//이 로직이 에러가 났을때 실행
    }


    
    static async save(userInfo){//4. user,js에서 가져온걸 여기에서 사용
        const users = await this.getUsers(true);//데이터를 오브젝트 형태로 가져와 users에 저장
        //데이터 추가
        if (users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다."// users.js에ㅔ 출력하기위한것
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json",JSON.stringify(users));
    //fs에있는 writefile이라는 메소드를 가져와 저장할 경로와 저장할 정보를 가져온다
        return {success : true};
        
    }

}

module.exports = UserStorage;
