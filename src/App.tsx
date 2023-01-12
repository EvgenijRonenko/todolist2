import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTask] = useState([
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'ES6 & TS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
    ])

  // let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (id: string) => {
        setTask(tasks.filter(el => el.id !== id))
    }


    // const taskFilter = (filterValue: FilterValuesType) => {
    //     setFilter(filterValue)
    // }
    //
    //
    // let filter2 = tasks
    // if (filter === 'active') {
    //     filter2 = tasks.filter((el) => !el.isDone)
    // }
    // if (filter === 'completed') {
    //     filter2 = tasks.filter((el) => el.isDone)
    // }


    return (
        <div className="App">
            <Todolist title="123"
                      tasks={tasks}
                      removeTask={removeTask}
                      /*taskFilter={taskFilter}*/


            />
        </div>
    );
}

export default App;
