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
    }
    render(){
        let sortedTableByDate = this.state.tasks.sort((task1,task2)=>task1.date-task2.date)
        return (
            <div className='task-list'>{sortedTableByDate.map((task,index) => {
                    return <Task task={task} key={task.timeStamp} index={index} filterTasks={this.filterTasks} updateTask={this.props.updateTask}/>
                })}</div>
        )
    }
}
export default TasksList;