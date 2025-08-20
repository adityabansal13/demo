// initially agar TODOS array me kuch ho to unhe add krna pdega page prr
// we are adding a static function inside Todo class

let input = document.querySelector('input');
let button = document.querySelector('button');

//pehle task list ko select kro
let taskList = document.querySelector('ul');

// This will store all the todos of the user...
let todos = [
    { task: 'Cricket', id: 1 },
    { task: 'Hockey', id: 2 },
    { task: 'Sing', id: 3 },
    { task: 'Coding', id: 4 },
]; // Isko load krne ke liye initially we have created function refreshTodos
let currentId = todos.length + 1;

class Todo{

    static addTask(name , initialLoading=false){
        // 1. create li item
        let li = document.createElement('li');

        // 2. add inputData to li item
        li.innerText = name;

        // 3. create 👆🏻,👇🏻,❌,📝
        let btn1 = document.createElement('button');
        btn1.innerText = '👇🏻';
        btn1.classList.add('decrease-priority');

        let btn2 = document.createElement('button');
        btn2.innerText = '👆🏻';
        btn2.classList.add('increase-priority');

        let btn3 = document.createElement('button');
        btn3.innerText = '❌';
        btn3.classList.add('delete-task');

        let btn4 = document.createElement('button');
        btn4.innerText = '📝';
        btn4.classList.add('update-task');


        // 4. append all buttons as children of li item
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        li.appendChild(btn4);

        // 5. append this li to taskList
        taskList.appendChild(li);

        //--------------------ADDING TASKS TO TODOS ARRAY-----------------------------
        if(initialLoading == false){
            todos.push({
                task : name,
                id : currentId++
            });
            console.log(todos);
        }
    }

    // initially agar TODOS array me kuch ho to unhe add krna pdega page prr
    static refreshTodos(){
        for(let i = 0 ; i <  todos.length ; i++){
            this.addTask(todos[i].task , true);
        }
    }
}


// Call this function in the starting so that todos array ke elements get loaded on the page
Todo.refreshTodos();


button.addEventListener('click', (ev) => {
    let inputData = input.value.trim();
    input.value = "";

    if(inputData){
        Todo.addTask(inputData);
    }
})