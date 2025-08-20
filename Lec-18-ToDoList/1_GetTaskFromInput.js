let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', (ev) => {
    // console.log(input.value);

    // trim removes aage peeche ke extra spaces
    let inputData = input.value.trim();
    input.value = "";

    if(inputData){
        console.log(inputData);
    }
})