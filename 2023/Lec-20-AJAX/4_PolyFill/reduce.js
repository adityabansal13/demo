let arr = [1,2,3,4,5];

Array.prototype.myReduce = function(fun, initVal){
    let arr = this;
    
    let acc, start_indx;

    // agar initial value di hui h to acc me wo daldo
    if(initVal != undefined){
        acc = initVal;
        start_indx = 0;
    }
    else{ // if not then acc me 0th index ki value daldo
        acc = arr[0];
        start_indx = 1;
    }

    for (let i = start_indx; i < arr.length; i++) {
        acc = fun(acc,arr[i],i,arr);
    }
    return acc;
}

let x = arr.myReduce((acc,val,indx,arr) => {
    return acc * val;
},1);

console.log(x);

let y = arr.myReduce((acc,val,indx,arr) => {
    return acc * val;
});

console.log(y);