"use script";


class UserStorage{
    static #users = {//다른 파일에서 UserStorage.users를 사용하기 위해서는 static을 사용해야 한다. 
        //#을 사용해서 외부에서 못들어오게 은닉 시켜줌
        id: ["minseok","ㅎㅎ","ㅁㄴㅇㄹ"],
        psword: ["123","456","1245"],
        name: ["민석", "최민", "석"],
    };

    static getUsers(...fields) {
        const users = this.#users;//은닉된 프리베이트 정보 #users를 반환해주는 역할
        const newUsers = fields.reduce((newUsers, field) => {
            //reduce는 배열의 메소드 반복문임 필드에있는 원소를 하나씩 순회됨
            if (users.hasOwnProperty(field)){//이 users에 해당하는 키값이 있는지 물어보는것
                newUsers[field] = users[field];
            }
            return newUsers;//users의 field가 newUsers의 filed에 들어가고 그게 계속 반복
        },{})//이 오브젝트가 newUsers에 들어간다;
        return newUsers;
    }
}

module.exports = UserStorage;
