
let arr1 = [1,2,"멈춰",3,4,true,false];
for(i in arr1){
    console.log(arr1[i]);
    if(arr1[i]=="멈춰"){       
        break;
    }
}


console.log("------------");

let arr2 = [5,10,15,20,25];
for(i in arr2){
    console.log(arr2[i]);
    if(arr2[i]>=20){       
        break;
    }
}

console.log("------------");
let arr3 = [5,10,15,20,25];
for(i in arr3){   
    if(arr3[i]%2!=0){       
        continue;
    }
    console.log(arr3[i]);
}

console.log("------------");

for(let i=1; i<11; i++){   
    if(i%3==0){       
        continue;
    }
    console.log(i);
}

console.log("------------");
let arr4 = ["사과",1,"바나나",2,"포토",false];
for(i in arr4){      
    if(typeof(arr4[i])!="string"){       
        continue;
    }
    console.log(arr4[i]);
}

console.log("------------");
class CarInfo {
    constructor(brand, color, model){
        this.brand = brand;
        this.color = color;
        this.model = model;
    }    
    drive(){
        console.log(`모델${this.model}가 달리는 중..`);            
    }
    stop(){
        console.log(`모델${this.model}가 멈춤..`);
    }
}

const c1 = new CarInfo("현대","쥐색","소나타");
const c2 = new CarInfo("현대","쥐색","싼타페");
   

    c1.drive();
    c2.stop();


    class ElectricInfo extends CarInfo{
        super(brand, color, model){
            this.battery = battery;
        }
        charge(){
            console.log(`모델 ${this.model}이 충전중`)
        }
    }

    let c3 = new ElectricInfo("현대","쥐색","싼타페",4000);
    c3.charge();
    c3.drive();