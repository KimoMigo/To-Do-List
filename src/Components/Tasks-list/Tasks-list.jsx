import React from 'react';
import Task from '../Task/Task';
import './Task-list.css';

class TasksList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:this.props.tasks
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.tasks !== prevState.tasks){
            return {
                tasks:nextProps.tasks
            };
        }
        return null;
    }
    filterTasks = index => {
        this.state.tasks.splice(index,1);
        this.setState({tasks:this.state.tasks});
        console.log(this.state.tasks)
    }
    render(){
        return (
            <div className='task-list'>{this.state.tasks.map((task,index) => {
                    return <Task task={task} key={index} index={index} filterTasks={this.filterTasks}/>
                })}</div>
        )
    }
}
export default TasksList;