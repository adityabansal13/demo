let input = document.querySelector('input');
let button = document.querySelector('button');

//pehle task list ko select kro
let taskList = document.querySelector('ul');


function addTaskToTaskList (name){
        // <!-- <li>
        //     Cricket
        //     <button class="decrease-priority">👇🏻</button>
        //     <button class="increase-priority">👆🏻</button>
        //     <button class="delete-task">❌</button>
        //     <button class="update-task">📝</button>
        // </li>

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
}


button.addEventListener('click', (ev) => {
    let inputData = input.value.trim();
    input.value = "";

    if(inputData){
        addTaskToTaskList(inputData);
    }
})