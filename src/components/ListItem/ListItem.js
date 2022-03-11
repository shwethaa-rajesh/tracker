import {useState} from 'react';
import './ListItem.css'
const ListItem=(props)=>{
    
    const [initialTitle,setInitialTitle]=useState(props.title);
    
    const changeTitleHandler=()=>{
        setInitialTitle('Updated title')
    }
    return(
        <div className='list-item'>
            <h1>{initialTitle}</h1>
            <p>{props.description}</p>
            <p>Hours : {props.hours}</p>
            <button onClick={changeTitleHandler}>Change Button</button>
        </div>
        
    )
}

export default ListItem