import React from 'react';
import DateTimePicker from 'react-datetime-picker';

class EditTrue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:this.props.date,
            task:this.props.value
        }
    }
    dateChange = date => {
        this.setState({date:date});    
    }
    taskChange = evt => {
        this.setState({task:evt.target.value});
    }
    render(){
        return (
                <div className='task'>
                    <input type="text" value={this.state.task} autoFocus={true} onChange={e =>this.taskChange(e)}/>
                    <DateTimePicker value={this.state.date} onChange={this.dateChange}/>
                    <button onClick={()=>{this.props.updateTask(this.state.date,this.state.task,this.props.index);
                                         this.props.confirmMod();}}>Confirm</button>
                    <button onClick={this.props.cancelMod}>Cancel</button>
                </div>
            );
    }
}

export default EditTrue;
