import React from 'react';
import EditTrue from '../Edit-true/Edit-true';
import EditFalse from '../Edit-false/Edit-false';
import './Task.css';


class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editable:false,
            task:this.props.task
        }
    }
    changeState = () => {
        this.setState({editable:true});
    }
    handleChange = value => {
        this.setState({task:value});
    }
    confirmMod = () => {
        this.setState({editable:false});
    }
    cancelMod = () => {
        this.setState({editable:false,task:this.props.task});
    }
    render(){
        let paragraph;
        if(this.state.editable){
            paragraph = <EditTrue value={this.state.task} index={this.props.index} handleChange={this.handleChange} confirmMod={this.confirmMod} cancelMod={this.cancelMod}/>;
        }
        else{
            paragraph = <EditFalse value={this.state.task} changeState={this.changeState} filterTasks={this.props.filterTasks} index={this.props.index}/>;
        }
        return (
            <div>
                {paragraph}
            </div>
        );
    }
}
export default Task;