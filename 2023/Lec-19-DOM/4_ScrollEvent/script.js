let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');
console.log(body);

// body.onscroll = (ev)=>{
//     console.log(ev);
//     console.log(window.scrollY)
//     if(window.scrollY < 300){
//         console.log("On page 5");
//     }
//     else{
//         console.log("On page gr than 5");
//     }
// }

window.onscroll = (ev) => {
    // console.log(ev)
    console.log("Scroll");
    if(window.scrollY>300){
        navBar.style.backgroundColor = "orange";
    }
    else{
        navBar.style.backgroundColor = "white";
    }
}

window.onscrollend = (ev) =>{
    alert("End");
}