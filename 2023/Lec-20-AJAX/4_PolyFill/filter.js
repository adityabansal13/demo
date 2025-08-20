let arr = [1,2,3,4,5];

Array.prototype.myFilter = function(fun){
    let arr = this;
    let newArr = [];

    for(let i=0 ; i<arr.length; i++){
        let addToArray = fun(arr[i],i,arr);
        addToArray ? newArr.push(arr[i]) : "";
    }
    return newArr;
}

let x = arr.myFilter((val,indx,arr) => {
    if(val%2==0){
        return true;
    }
    return false;
})

console.log(x);


//inbuilt filter
let y = arr.filter((val,indx,arr) => {
    if(val%2==0){
        return true;
    }
    return false;
})

console.log(y);