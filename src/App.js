import React from 'react';
import './App.css';
import TasksList from './Components/Tasks-list/Tasks-list';
import DateTimePicker from 'react-datetime-picker';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            tasks:[],
            date: new Date(),
            timeStamp:0
        }
    }
    handleChange = (e) => {
        this.setState({text:e.target.value});
    }
    handleClick = () => {
        if(this.state.text){
            this.setState((state,props)=>{return {tasks:[...state.tasks,{text:state.text,date:state.date,timeStamp:Date.now()}]}});
            this.setState({text:''});
        }
        else{
            alert('Please fill a task')
        }
    }
    onchange = date => {
        this.setState({date:date});
    }
    updateTask = (date,task,index) => {
        this.state.tasks.splice(index,1);
        this.setState((state,props)=>{return {tasks:[...state.tasks,{text:task,date:date,timeStamp:Date.now()}]}},()=>console.log(this.state.tasks));
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Welcome to To do list built with ReactJs
                    </p>
                </header>
                <div className='task-field'>
                    <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} className='task-input'/>
                    <DateTimePicker onChange={this.onchange} value={this.state.date}/>
                    <button onClick={this.handleClick} className='add-button'>Add task</button>
                </div>
                <TasksList tasks={this.state.tasks} updateTask={this.updateTask}/>
            </div>
        );
    }
}

export default App;
