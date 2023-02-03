import React, {useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton';





function App() {
    return (
        <div>
            <SuperButton callback={()=>{}} color={'red'}>Red Super Button</SuperButton>
            <SuperButton callback={()=>{}}>Red Super Button</SuperButton>
            <SuperButton callback={()=>{}} color={'secondary'} disabled>Red Super Button</SuperButton>
        </div>
    );
}



export default App;
