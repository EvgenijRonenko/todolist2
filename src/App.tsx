import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';


function App() {
    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'ES6 & TS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
    ]
}

return (
    <div className="App">

    </div>
);
}

export default App;
