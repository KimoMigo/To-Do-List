import React from 'react';
import './Task.css'

class Task extends React.Component{
    render(){
        return (
            <div className='task'>
                <p>{this.props.task}</p>
                <p onClick={()=>this.props.filterTasks(this.props.index)}>X</p>
            </div>
        );
    }
}
export default Task;