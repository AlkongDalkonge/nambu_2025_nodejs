const name="이지훈";
const age="";
const job="developer"

const name1 = "홍길동 ";

PersonInfo

class Employee extends PersonInfo {
    constructor(name, age, address, salary) {
        super(name,age, address);
        this.salary = salary;
    }
}

let el = new Employee("홍길동", 60, "인천 부평", 1000000);
console.log(el);

try {
    const arr = new Array(-1);
} catch (error) {
    //데이터 질의 하다가 예외 발생했을 때 처리
    console.log("예외 발생",e);

    
}finally{
    //데이터베이스 커넥션 닫아주기
    console.log("예외가 발생해도 이작업이 필요",e);
}

try {
    const err = new Error("나만의 에러");
    err.name = "나만의 에러";
    err.message = "나만의 에러가 완성되었습니다.";
    throw err;
    
} catch (error) {
    console.log((e.name, e.message));
    
}



throw err;
