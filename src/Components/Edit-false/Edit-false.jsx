import React from 'react';

function EditFalse(props){
    return (
        <div className='task'>
            <p>{props.value}</p>
            <p>{props.time}</p>
            <button onClick={props.changeState}>Edit</button>
            <button onClick={()=>props.filterTasks(props.index)}>X</button>
        </div>
    );
}
export default EditFalse;