import React from 'react';
import './App.css';
import TasksList from './Components/Tasks-list/Tasks-list';
import TimePicker from 'react-time-picker';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            tasks:[],
            time: '11:00'
        }
    }
    handleChange = (e) => {
        this.setState({text:e.target.value});
    }
    handleClick = () => {
        if(this.state.text){
            this.setState({tasks:[...this.state.tasks,{text:this.state.text,time:this.state.time}]});
            this.setState({text:''});
            console.log(this.state.text);
        }
        else{
            alert('Please fill a task')
        }
    }
    onchange = time => {
        this.setState({time:time});
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
                    <TimePicker onChange={this.onchange} value={this.state.time}/>
                    <button onClick={this.handleClick} className='add-button'>Add task</button>
                </div>
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;
