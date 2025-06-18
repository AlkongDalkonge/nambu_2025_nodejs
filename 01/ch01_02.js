let pi;
console.log(pi);  // undefined
pi=3.141592;
console.log(pi);    //3.141592

let radius = 12;
console.log(`넓이 : ${pi*radius*radius}`);
console.log(`둘레 : ${pi*2*radius}`);

//문제 area라는 변수를 만들고 radius 15 인 경우 area  넓이를 계산
let area;
radius = 15;
area=pi*radius*radius;
console.log(`넓이1 : ${area}`);

//문제2 : 사각현의 넓이를 계산 width, height에서 각각 값을 넣고
//area2 라는 변수에 넓이를 넣어보세요. 그리고 area2 출력
let width = 20;
let height =10;
let area2 = width*height;
console.log(`넓이2 :${area2} `);

let num = 0 ;
num++;
console.log(num); //증감연산자

console.log(String(52));
console.log(typeof String(52));

console.log(Number("52"));
console.log(typeof Number("52"));

console.log(parseInt("1234"));  //1234
console.log(parseInt("1234.56"));   //1234
console.log(parseFloat("1234.56")); //1234.56

let a = 45;
console.log(typeof a); //number

const test = "변경불가";
//test ="값이 변경되나요?";
console.log(test);

const size = "42px";
const value = parseInt(size);
console.log(value);

const rate = "3.14%";
console.log(parseFloat(rate));  //3.14














