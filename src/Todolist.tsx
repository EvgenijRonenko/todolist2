import {FilterValuesType} from './App';


type TasksType = {
    id: string
    title: string
    isDone: boolean

}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    taskFilter:(filterValue: FilterValuesType) => void

}



export const Todolist = (props: TodolistPropsType) => {

    return (
        <div>
        <h3>{props.title}</h3>

    <div>
        <input/>
        <button>+</button>
    </div>

    <ul>
        {props.tasks.map(el=>
        <li key={el.id}>
            <button onClick={()=>props.removeTask(el.id)}>X</button>
            <input type={'checkbox'} checked={el.isDone}/>
            <span>{el.title}</span>
        </li>
        )}

    </ul>
            <div>
                <button onClick={()=>props.taskFilter('all')}>All</button>
                <button onClick={()=>props.taskFilter('active')}>Active</button>
                <button onClick={()=>props.taskFilter('completed')}>Completed</button>
            </div>
        </div>
)
}