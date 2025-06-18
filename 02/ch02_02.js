//파일경로 다루기

// //CJS 방식(CommonJS, Node 기본
const path = require("path");

// const fullPath = path.join(__dirname, "files", "test.txt");
// console.log(`전체경로1: ${fullPath}`);
// //__dirname : 현재 파일의 디렉토리 절대경로를 가져옴

// //윈도우와 리눅스시 \,/ 다를때 이런식으로 쓰면 좋다.
// const fullPath2 = path.join(__dirname, "files", "tasks", "jobs", "01.txt");
// console.log(`전체경로2: ${fullPath2}`);

// const pathParts = path.parse(fullPath);
// console.log(pathParts);

// //확장자 가져오기
// const ext = path.extname(fullPath);
// console.log(ext); //.txt

//fileSystem
const fs = require("fs");

const dirPath = path.join(__dirname, "new-dir");
console.log(dirPath);

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dirPath2 = path.join(__dirname, "tasks");
if (!fs.existsSync(dirPath2)) {
  fs.mkdirSync(dirPath2);
}

const dirPath3 = path.join(__dirname, "tasks", "jobs", "01");

if (!fs.existsSync(dirPath3)) {
  //fs.mkdirSync(dirPath3); //오류..
  fs.mkdirSync(dirPath3, { recursive: true });
}

// const filePath = path.join(dirPath3, "test.txt");
// fs.writeFileSync(filePath, "디렉토리생성후 파일생성테스트");

const dirPath4 = path.join(__dirname, "main", "src", "code");
if (!fs.existsSync(dirPath4)) {
  fs.mkdirSync(dirPath4, { recursive: true });
}

const filePath4 = path.join(dirPath4, "javascript.txt");
fs.writeFileSync(filePath4, "자바스크립트 테스트파일입니다.");

//디렉토리 이름변경
const newDIrPath = path.join(__dirname, "rename-dir");
fs.renameSync(dirPath, newDirPath);
//디렉토리 삭제
fs.rmdirSync(newDirPath);
