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

    const checkBoxChange = (id: string, checkedValue: boolean) => {

    }

    const addTask = (inputValue: string) => {
        let newTask = {id: v1(), title: inputValue, isDone: false}
            setTask([newTask, ...tasks])
    }

      const removeTask = (id: string) => {
        setTask(tasks.filter(el => el.id !== id))
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter((el) => !el.isDone)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter((el) => el.isDone)
    }
    const taskFilter = (filterValue: FilterValuesType) => {
        setFilter(filterValue)
    }


    return (
        <div className="App">
            <Todolist title="123"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      taskFilter={taskFilter}
                      addTask={addTask}
                      checkBoxChange={checkBoxChange}


            />
        </div>
    );
}

export default App;
