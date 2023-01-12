import {FilterValuesType} from './App';
import {useState} from 'react';

type TasksType = {
    id: string
    title: string
    isDone: boolean

}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    /*taskFilter:(filterValue: FilterValuesType) => void*/

}



export const Todolist = (props: TodolistPropsType) => {
    let [filter, setFilter] = useState<FilterValuesType>('all')
    const taskFilter = (filterValue: FilterValuesType) => {
        setFilter(filterValue)
    }

    let filter2 = props.tasks
    if (filter === 'active') {
        filter2 = props.tasks.filter((el) => !el.isDone)
    }
    if (filter === 'completed') {
        filter2 = props.tasks.filter((el) => el.isDone)
    }


    return (
        <div>
        <h3>{props.title}</h3>

    <div>
        <input/>
        <button>+</button>
    </div>

    <ul>
        {filter2.map(el=>
        <li key={el.id}>
            <button onClick={()=>props.removeTask(el.id)}>X</button>
            <input type={'checkbox'} checked={el.isDone}/>
            <span>{el.title}</span>
        </li>
        )}

    </ul>
            <div>
                <button onClick={()=>taskFilter('all')}>All</button>
                <button onClick={()=>taskFilter('active')}>Active</button>
                <button onClick={()=>taskFilter('completed')}>Completed</button>
            </div>
        </div>
)
}