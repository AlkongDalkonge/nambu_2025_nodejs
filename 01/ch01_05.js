
//선언함수
function add1(x,y) {
    return x+y;
}

console.log((add1(1,2)));


//익명함수
const add2 = function(x,y) {
    return x+y;
}
console

//화살표함수
const add3 = (x,y)=>{
    return x+y;
}

//콜백함수 (함수안에 함수)
const ten = (cb)=> {
    for(let i=0; i<10; i++){
         cb();  //함수실행해라
    }
}

ten(function(){
    console.log('call function');
    
});

setTimeout(function(){
    console.log('1초뒤에 호출');
}, 1000);

setTimeout(() => {
    console.log('1초뒤에 호출');
}, 1000);

setInterval(() => {
    console.log('1초마다 실행');
}, 1000); //1초, 1초 간격으로 계속실행