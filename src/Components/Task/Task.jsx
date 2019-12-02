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
            date:this.props.task.date,
            timer:''
        }
    }
    changeState = () => {
        this.setState({editable:true});
    }
    confirmMod = () => {
        this.setState({editable:false});
    }
    cancelMod = () => {
        this.setState({editable:false});
    }
    convertSecondsToTime = seconds => {
        let hours = 0;
        let minutes = 0;
        let secondsLeft=0;
        if(seconds>=0){
            hours = Math.floor(seconds/3600);
            minutes = Math.floor((seconds-hours*3600)/60);
            secondsLeft = seconds-hours*3600-minutes*60;
            return hours+':'+minutes+':'+secondsLeft;
        }
        else{
            let minusSeconds = -seconds;
            hours = Math.floor(minusSeconds/3600);
            minutes = Math.floor((minusSeconds-hours*3600)/60);
            let secondsPassed = minusSeconds%60;
            return hours+':'+minutes+':'+secondsPassed;
        }
    }
    componentDidMount(){
        let time=this.state.date.getTime();
        setInterval(()=>{
            let currentTime = Date.now();
            this.setState({timer:this.convertSecondsToTime((Math.floor((time-currentTime)/1000)))});
        },1000)
    }
    render(){
        let paragraph;
        if(this.state.editable){
            paragraph = <EditTrue value={this.state.task} date={this.state.date} index={this.props.index} handleChange={this.handleChange} confirmMod={this.confirmMod} cancelMod={this.cancelMod} updateTask={this.props.updateTask}/>;
        }
        else{
            paragraph = <EditFalse value={this.state.task} date={this.state.date} changeState={this.changeState} filterTasks={this.props.filterTasks} index={this.props.index} timer={this.state.timer}/>;
        }
        return (
            <div>
                {paragraph}
            </div>
        );
    }
    }
export default Task;