let fsp = require('fs/promises');
let fs = require('fs');
const path = require('path');

class Todos{
    static addTask(name) {
        let filePath = path.join(__dirname , "data" , "todos.json");
        // Read the file
        let data = fs.readFileSync(filePath,'utf-8');
        
        // Ab is data wale array ke andar new data add krna hai
        data = JSON.parse(data);
        console.log(data);
        data.push(name);
        console.log(data);
        fsp.writeFile(filePath,JSON.stringify(data))
            .then(()=>{
                console.log("Task added successfully");
            })
            .catch((err)=>{
                throw new Error("Error while adding a new task");
                // console.log(err);
            })
    }
    static deleteTask() {

    }
    static updateTask() {

    }
    static getAllTasks() {

    }
}

Todos.addTask("Cricket");
Todos.addTask("Hockey");
// Todos.addTask("Coding");

Todos.updateTask("Hockey" , "Mens Hockey");

Todos.deleteTask("Cricket");

// console.log(Todos.getAllTasks());