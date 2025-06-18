const fetchData = ()=>{ //callback <-handleData
    setTimeout(()=>{    //서버에서 데이터를 받는 부분
        const data = "서버에서 받은 데이터";
        useCallback(data);
    },1000);
}

const handleData = (data)=>{    //서버에서 받은 데이터를 처리하는 내용, 데이터 파싱등등
    console.log("콜백에서 받은 데이터",data);
}


const fetchDataPromise = () => {
    return new Promise((resolve, reject)=>{ //resolve, reject 둘다 함수 
        setTimeout(()=>{
            const success = true;
            //외부에서나 db에서 데이터를 가지고 오는 로직있는자리
            if(success){
                resolve();  //성공시, 외부데이터 가져오기 성공
            }else{
                reject();   //실패시, 외부에서 가져오기 실패
            }
        },1000);
    });
}

fetchDataPromise()  //외부라이브러리들이 이런형태로 함수를 제공 
    .then((data)=>{ //resolve -> 데이터 패치가 성공했을때 실행
        console.log("프로미스에서 받은 데이터", data);
        
    })
    .catch((error)=>{    //reject => 데이터 패치 실패해을때 실행
        console.log("에러",error);
        
    })


const getData = ()=>{
    async()=>{
        try {
            const data = await fetchDataPromise();  //fetchDataPromise 다 할 동안 기다렸다 data 에 넣어준다.
            console.log("async/await data",data);   // 패치성공시 처리로직
            
        } catch (e) {
            console.log("에러",error);  //rejecct => 데이터 패치 실패헀을때
            
        }
    }
}    

const greet = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("안녕하세요.");
        }, 2000);
    });
};


greet.then(()=>{
    console.log(message);
    
})