"use script";

const database = require("mime-db");
const db = require("../config/db");
//promises는 수행하는 동작이 끝남과 동시네 상태를 알려주기 때문에
//비동기 처리에 아주 효과적이다.

class UserStorage{

    static getUserInfo(id){//데이터베이스에 접근을하여 유저정보를 반환해준다.
        return new Promise(function(resolve,reject){//getinfo 메소드가 반환하게 해주는 역할
            
            //promise안이 실행에 성공하면 resolve를 실행하고 시류ㅐ하면 reject를 실행한다
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query,[id],(err, data)=>{//SELECT * FROM users:db에서 정보를 가저오는역할 
                //WHERE id = ?"[id]: 내가 정확한 아이디를 적으면 그에맞는 아이디에 관한 정보를 가져오는 역할 
                if (err) reject(`${err}`);//실패하면 reject를 던지고
                resolve(data[0]);//성공하면 resolve를 던진다.
                //0번지만 반환해야한다.
            });
        })
    }


    
    static async save(userInfo){//4. user,js에서 가져온걸 여기에서 사용
        return new Promise(function(resolve,reject){//getinfo 메소드가 반환하게 해주는 역할
            const query = "INSERT INTO users(id,name,psword) VALUES(?,?,?);";
            db.query(query,
                [userInfo.id, userInfo.name, userInfo.psword],
                (err)=>{
                if (err) reject(`${err}`);
                resolve({success: true});
            });
        })
    }
}

module.exports = UserStorage;
