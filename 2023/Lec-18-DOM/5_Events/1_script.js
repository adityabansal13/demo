let btn = document.querySelector('button');
let para = document.querySelector('.para');

console.log(btn);
console.log(para);

btn.onclick = ()=>{
    console.log("clicked");
}
btn.onclick = ()=>{
    console.log("I am clicked");   // ye wala chalega kyuki ye baadme banaya hai uparwale ke
}

para.onmouseenter = ()=>{
    para.classList.add('mouse-enter');
}

// para.onmouseleave = ()=>{
//     para.classList.remove('mouse-enter');
// }

para.ondblclick = ()=>{
    console.log("I am double clicked")
}