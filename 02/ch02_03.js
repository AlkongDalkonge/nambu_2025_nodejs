const http = require("http");

//req : HTTP요청, res : HTTP응답
const server = http.createServer((req, res) => {
  //요청이 올떄마다 실행되는 콜백 함수
  //브라우저에게 응담은 200 성공이고, 컨텐트 타입은 그냥 텍스트고, 캐릭터 셋은 utf-8이야. <헤더정보>
  res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
  //본문에 내용을 클라이언트에게 보내주는거야~
  res.end("안녕하세요. 정아의 첫번째 웹서버에 오셨어용");
}); //나만의웹서버 인자가 하나만들어간다. 콜백함수

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`나만의 웹서버가 http://localhost:${PORT} 에서 실행중 입니다.`);
});
