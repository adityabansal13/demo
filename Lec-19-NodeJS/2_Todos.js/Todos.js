let fs = require('fs/promises');
let fssync = require('fs');
const path = require('path');

class Todos{
    static addTask(name) {
        let filePath = path.join(__dirname , "data" , "todos.json");
        // Read the file
        fs.readFile(filePath,'utf-8')
            .then((data)=>{
                data = JSON.parse(data);
                data.push(name);
                // console.log(data);
                fs.writeFile(filePath, JSON.stringify(data))
                    .then(() => {
                        console.log("Task added successfully");
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            })
    }
    static deleteTask(name) {
        let filePath = path.join(__dirname , "data" , "todos.json");
        fs.readFile(filePath,'utf-8')
            .then((data)=>{
                data = JSON.parse(data);
                data = data.filter(d => d != name);
                fs.writeFile(filePath, JSON.stringify(data))
                    .then(() => {
                        console.log("Task deleted successfully");
                    })
                    .catch((err) => {
                        console.log(err);
                    })

            })
    }
    static updateTask(name , upName) {
        let filePath = path.join(__dirname , "data" , "todos.json");
        fs.readFile(filePath , 'utf-8')
            .then((data) => {
                data = JSON.parse(data);
                
                //Find index of name
                let index = data.indexOf(name);
                if( index !== -1){
                    data[index] = upName;
                    return fs.writeFile(filePath , JSON.stringify(data));
                }
                else{
                    console.log("Task not found");
                }
            })
            .then(() => {
                console.log("Task updated successfully");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    static getAllTasks() {
        let filePath = path.join(__dirname , "data" , "todos.json");
        let data = fssync.readFileSync(filePath,'utf-8');
        return JSON.parse(data);
    }
}

// Todos.addTask("Cricket");
// Todos.addTask("Hockey");
// Todos.addTask("Coding");

Todos.updateTask("Hockey" , "Mens Hockey");

// Todos.deleteTask("Cricket");

// console.log(Todos.getAllTasks());