// Lets put a delay of 1 sec
// endTime - startTime >= 1 sec

function delayOneSec(){
    let currentTime = new Date().getTime();

    while(new Date().getTime() - currentTime < 1000){

    }
}

function delayNSec(n){
    for(let i = 0; i < n; i++){
        delayOneSec();
    }
}

//delayOneSec();
delayNSec(2);
console.log("Hello World");
console.log(new Date().getTime());