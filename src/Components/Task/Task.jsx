import React from 'react';
import EditTrue from '../Edit-true/Edit-true';
import EditFalse from '../Edit-false/Edit-false';
import './Task.css';


class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editable:false,
            task:this.props.task.text,
            time:this.props.task.time
        }
    }
    changeState = () => {
        this.setState({editable:true});
    }
    confirmMod = (time,task) => {
        this.setState({editable:false,time:time,task:task});
    }
    cancelMod = () => {
        this.setState({editable:false});
    }
    render(){
        let paragraph;
        if(this.state.editable){
            paragraph = <EditTrue value={this.state.task} time={this.state.time} index={this.props.index} handleChange={this.handleChange} confirmMod={this.confirmMod} cancelMod={this.cancelMod}/>;
        }
        else{
            paragraph = <EditFalse value={this.state.task} time={this.state.time} changeState={this.changeState} filterTasks={this.props.filterTasks} index={this.props.index}/>;
        }
        return (
            <div>
                {paragraph}
            </div>
        );
    }
}
export default Task;