let date = new Date();

if(date.getHours()<12){
    console.log("오전");
}else{
    console.log("오후");
}

const hour = date.getHours();
const timeOfDay = hour < 12 ? "오전":"오후";
console.log(`현재는 ${timeOfDay} 입니다.`);

const temperature = 24;

if(temperature>=30){
    console.log("더운 날씨 입니다.");
}else if(temperature>=20){
    console.log("따뜻한 날씨 입니다.");
}else if(temperature>=10){
    console.log("선선한 날씨 입니다.");
}else{
    console.log("추운 날씨 입니다.");
}

const day = 1;

switch (day) {
    case 1:
        console.log("월요일");break;
    case 2:
        console.log("화요일");break;    
    case 3:
        console.log("수요일");break;    
    case 4:
        console.log("목요일");break;
    case 5:
        console.log("금요일");break;
    case 6:
        console.log("토요일");break;
    case 0:
        console.log("일요일");break;        

    default:
        console.log("nothing");break;  
}

//짧은 조건문
const name = "정아";
const displayName = name || "익명";
console.log(`환영합니다 ${displayName}님`);

//nullish 병합연산자
const userInput = null;
const defaultValue = "기본값";
const result = userInput ?? defaultValue;
console.log(`결과 : ${result}`);

//조건부실행 
const isLoggedIn = false;
isLoggedIn && console.log("로그인 되었습니다.");


