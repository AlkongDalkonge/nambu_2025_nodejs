//운영체제정보
const os = require("os");
console.log(`운영체제 : ${os.type()}`);
console.log(`플랫폼 : ${os.platform()}`);
console.log(`아키텍처 : ${os.arch()}`);
console.log(`호스트명 : ${os.hostname()}`);

//cpu정보
const cpus = os.cpus();
console.log(`cpu 코어수: ${cpus.length}`);
console.log(`cpu 모델: ${cpus[0].model}`);
console.log(`cpu 속도: ${cpus[0].speed}MHz`);

//메모리정보

const totalMemoryGB = os.totalmem();
const freeMemoryGB = os.freemem();
console.log(`메모리정보 : ${totalMemoryGB} GB`);
console.log(`사용 가능한 메모리 : ${freeMemoryGB.toFixed(2)}GB`);

//사용자정보가지고오기
const userInfo = os.userInfo();
console.log(`사용자이름 : ${userInfo.username}`);
console.log(`홈 디렉토리 : ${userInfo.homedir}`);
console.log(`쉘 : ${userInfo.shell}`);
