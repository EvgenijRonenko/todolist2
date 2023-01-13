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

      const removeTask = (id: string) => {
        setTask(tasks.filter(el => el.id !== id))
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')

    let filter2 = tasks
    if (filter === 'active') {
        filter2 = tasks.filter((el) => !el.isDone)
    }
    if (filter === 'completed') {
        filter2 = tasks.filter((el) => el.isDone)
    }
    const taskFilter = (filterValue: FilterValuesType) => {
        setFilter(filterValue)
    }


    return (
        <div className="App">
            <Todolist title="123"
                      tasks={filter2}
                      removeTask={removeTask}
                      taskFilter={taskFilter}


            />
        </div>
    );
}

export default App;
