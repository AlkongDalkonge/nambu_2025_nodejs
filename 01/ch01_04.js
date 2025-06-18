let arr = [5,23,"hello",true,"world",-9];
console.log(arr);
console.log(arr[1]);

for(let i=0; i<arr.length; i++){
    console.log(`${i} is ${arr[i]}`);
}

console.log("------------------");

//i에는 인덱스가 담긴다.
for( i in arr){
    console.log(`${i} is ${arr[i]}`);
}

for(e of arr){
    console.log(e);
    
}
