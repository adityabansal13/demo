let arr = [1,2,3,4,5];

let newArr = arr.map(function(val,idx,arr){
    console.log("Val:",val," Index:",idx," Arr:",arr);
    return val+val;
})
console.log(newArr);

let newArr1 = arr.map(function(val){
    return val*val;
})
console.log(newArr1);

let newArr2 = arr.map(val => val*val);
console.log(newArr2);

let boolArr = arr.map(val => {
    if(val%2==0) return true;
    else return false;
})
console.log(boolArr);