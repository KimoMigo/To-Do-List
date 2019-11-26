import React from 'react';
import Task from '../Task/Task';
import './Task-list.css';

class TasksList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:[]
        }
    }
    filterTasks = index => {
        const tasks = this.props.tasks;
        let filtredTasks = tasks.splice(index,1);
        this.setState({tasks:filtredTasks});
    }
    render(){
        return (
            <div className='task-list'>{this.props.tasks.map((task,index) => {
                    return <Task task={task} key={index} index={index} filterTasks={this.filterTasks}/>
                })}</div>
        )
    }
}
export default TasksList;