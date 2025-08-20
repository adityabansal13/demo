let cntValue = document.querySelector('.cntValue');
let reduceBtn = document.querySelector('.reduce');
let updateBtn = document.querySelector('.update');

updateBtn.addEventListener('click' , ()=>{
    // console.log("Update button clicked");
    // console.log(cntValue.innerText);

    cntValue.innerText = parseInt(cntValue.innerText)+1;

    //ways to convert string to int
    //console.log(parseInt(cntValue.innerText)+2);
    //console.log((+cntValue.innerText)+2);
    //console.log(Number(cntValue.innerText)+2);
})

reduceBtn.addEventListener('click' , ()=>{
    //console.log("Reduce button clicked");
    cntValue.innerText = parseInt(cntValue.innerText)-1;
})