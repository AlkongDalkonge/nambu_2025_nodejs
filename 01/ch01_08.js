const fruits = ["", "", "", ""];

const [first, second] = fruits;
console.log(first, second);

const student = {
  name: "이지훈",
  age: 50,
  grade: "B",
};

// const name = student.name;
// const age = student.age;
// const grade = student.grade;

//const name1, age1, grade1;

//객체구조분해할당
const { name, age, grade } = student;
console.log(name, age, grade);
//객체구조분해 - 다른변수할당
const { name: name1, age: age1, grade: grade1 } = student; //변수정의가능

const person = {
  name: "홍길동",
};

//기본값 예제 age에 기본값을 25로 주세요.
const { name: personName, age: personAge = 25 } = person;

//객체를 매개변수로 받는 함숲
const printStudentInfo = ({ name, age, grade = "B" }) => {
  console.log(`학생정보`);
  console.log(`이름 : ${name}`);
  console.log(`나이 : ${age}`);
  console.log(`성적 : ${grade}`);
};

printStudentInfo(student);

const book = {
  title: "자바스크립트 최고",
  author: "홍길동",
  publisher: "한빛",
};

//구조분해할당

const user = {
  id: 1,
  info: {
    name: "홍길동",
    address: {
      city: "서울",
      street: "강남대로",
    },
  },
};

const {
  id,
  info: {
    name: userName,
    address: { city, street },
  },
} = user;

console.log(`ID : ${id}`);
console.log(`이름 : ${userName}`);
console.log(`도시 : ${city}`);
console.log(`거리 : ${street}`);

//city변수이름은 cityName
const colors = ["빨", "주", "노", "초", "파"];
const [firstcolor, secondcolor, ...others] = colors;
console.log(firstcolor, secondcolor, others);

const user1 = { name: "", age: 45, email: "so@email.com" };
const user2 = { name: "전종서", age: 30 };

const formatUserInfo = ({ name, age, email = "이메일없음" }) => {
  return `이름은 ${name}, 나이는 ${age}, 이메일은 ${email}`; //문자열한개
};

console.log(formatUserInfo(user1));
console.log(formatUserInfo(user2));
