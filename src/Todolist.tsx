import {FilterValuesType} from './App';
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from './Components/Button';


type TasksType = {
    id: string
    title: string
    isDone: boolean

}

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    taskFilter: (filterValue: FilterValuesType) => void
    addTask: (inputValue: string) => void
}


export const Todolist = (props: TodolistPropsType) => {
    let [inputValue, setInputValue] = useState('')

    const addTaskHandler = () => {
        props.addTask(inputValue)
        setInputValue('')
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const removeTaskHandler=(tId: string)=> {
        props.removeTask(tId)
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.taskFilter(value)
    }


    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input value={inputValue} onChange={onChangeInputHandler} onKeyDown={onKeyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>

            </div>

            <ul>
                {props.tasks.map(t => {
                        return (
                            <li key={t.id}>
                                <button onClick={()=>removeTaskHandler(t.id)}>X</button>
                                <input type={'checkbox'} checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    }
                )}

            </ul>
            <div>
                <button onClick={()=>changeFilterHandler('all')}>All</button>
                <button onClick={()=>changeFilterHandler('active')}>Active</button>
                <button onClick={()=>changeFilterHandler('completed')}>Completed</button>
            </div>
        </div>
    )
}