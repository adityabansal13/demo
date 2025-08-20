let arr = [1,2,3,4,5];

let newArr = arr.filter((val,idx,arr) => {
    return val%2 != 0;
})
console.log(newArr);

let newArr1 = arr.filter(val => {
    return val%2 == 0;
})
console.log(newArr1);