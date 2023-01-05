import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist} from './Todolist';


function App() {

    let [tasks,setTask] = useState( [
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'ES6 & TS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
    ])

const removeTask = (id: string) => {
        setTask(tasks.filter(el => el.id !== id))
     }
     const filterTask = () => {
     if ()
     }




    return (
        <div className="App">
            <Todolist title='123'
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
