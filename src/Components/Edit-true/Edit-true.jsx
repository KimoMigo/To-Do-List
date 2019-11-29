import React from 'react';
import TimePicker from 'react-time-picker';

class EditTrue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:this.props.time,
            task:this.props.value
        }
    }
    timeChange = time => {
        this.setState({time:time});    
    }
    taskChange = evt => {
        this.setState({task:evt.target.value});
    }
    render(){
        return (
                <div className='task'>
                    <input type="text" value={this.state.task} autoFocus={true} onChange={e =>this.taskChange(e)}/>
                    <TimePicker value={this.state.time} onChange={this.timeChange}/>
                    <button onClick={()=>this.props.confirmMod(this.state.time,this.state.task)}>Confirm</button>
                    <button onClick={this.props.cancelMod}>Cancel</button>
                </div>
            );
    }
}

export default EditTrue;
