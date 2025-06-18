//파일다루기 fs 모듈 이용
// const fs = require("fs"); //common.js 방식 : fs 모듈(파일다루기모듈) 임포트
// //import fs from "fs"

// //동기식
// fs.writeFileSync("test.txt", "Hello World");
// fs.writeFileSync("hello.txt", "안녕하세요. 반갑습니다. 제이름은 설정아입니다.");
// console.log("파일쓰기완료!");

// //라이브러리를 사용하고 쓸줄알아야 코딩하기 쉬워진다. 계속 연습해야한다.
// //파일읽기
// const data = fs.readFileSync("test.txt", "utf-8"); //utf-8인코딩 : 공통인코딩포맷
// console.log(data);
// console.log(fs.readFileSync("hello.txt", "utf-8"));

// const stats1 = fs.statSync("test.txt");
// console.log(stats1);

// //비동기식, writeFileSync 보다는 불편하지만,대용량파일보기 좋고
// fs.writeFile("async-test.txt", "Async Hello World!", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("비동기 파일 쓰기 완료");
// });

// fs.writeFile(
//   "async-hello.txt",
//   "안녕하세용. 비동기 파일쓰기 테스트합니다요.",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("비동기 파일 퀴즈 완료!");
//   }
// );

// //대용량 파일일 경우 사용!
// fs.readFile("async-test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("비동기파일읽기: ", data);
// });

// fs.readFile("async-hello.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("읽기에러: ", err);
//   }
//   console.log("비동기파일읽기(퀴즈): ", data);
// });

// //내용추가
// fs.appendFile("파일경로", "추가할 내용", (err) => {
//   if (err) throw err;
//   console.log("내용이 추가되었습니다.");
// });

// //파일삭제
// fs.unlink("파일경로", (err) => {
//   if (err) throw err;
//   console.log("파일이 삭제되었습니다.");
// });

// //파일존재여부
// fs.existsSync("파일경로"); // true 또는 false 반환

// // 디렉토리 생성
// fs.mkdirSync("디렉토리명");

// // 디렉토리 삭제
// fs.rmdirSync("디렉토리명");

const fsPromise = require("fs").promises;

const fileOp = async () => {
  try {
    await fsPromise.writeFile(
      "promise-TextDecoderStream.txt",
      "Promise Hello World"
    );
    console.log("파일쓰기완료");

    const data = await fsPromise.readFile(
      "promise-TextDecoderStream.txt",
      "utf-8"
    );
    console.log("파일읽기", data);
  } catch (e) {
    console.log(e);
  }
};

//fileOp();

const fileOp2 = async () => {
  try {
    await fsPromise.writeFile(
      "promise-hello.txt",
      "안녕? 프로미스방식으로 파일쓰고, 읽기 하고 있옹 "
    );
    const data = await fsPromise.readFile("promise-hello.txt", "utf-8");
    console.log("파일읽기", data);
  } catch (e) {
    console.log(e);
  }
};

fileOp2();
