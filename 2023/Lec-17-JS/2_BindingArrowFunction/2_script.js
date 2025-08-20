function hello(){

    console.log(this);

    // function world(){            
    //     console.log(this);       // window return karega
    // }

    let world = ()=> {
        console.log(this);          // apne parent ka this return karega
    }

    world()
}

let person = {
    name : "Chandan",
    age: 20
}


hello.call(person);