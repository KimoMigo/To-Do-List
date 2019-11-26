import React from 'react';
import './App.css';
import TasksList from './Components/Tasks-list/Tasks-list';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            tasks:[]
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({text:e.target.value});
    }
    handleClick = () => {
        if(this.state.text){
            let tasks = this.state.tasks;
            let text = this.state.text;
            tasks.push(text);
            this.setState({tasks:tasks});
            this.setState({text:''});
        }
        else{
            alert('Please fill a task')
        }
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Welcome to To do list built with ReactJs
                    </p>
                </header>
                <input type="text" value={this.state.text} onChange={e => this.handleChange(e)}/>
                <button onClick={this.handleClick}>Add task</button>
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;
