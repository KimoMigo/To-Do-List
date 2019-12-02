import React from 'react';

class EditFalse extends React.Component{
render(){
    return (
        <div className='task'>
            <p>{this.props.value}</p>
            <p>{this.props.timer}</p>
            <p>{this.props.date.toLocaleTimeString()}</p>
            <p>{this.props.date.toLocaleDateString()}</p>
            <button onClick={this.props.changeState}>Edit</button>
            <button onClick={()=>this.props.filterTasks(this.props.index)}>X</button>
        </div>
    );
}
}
export default EditFalse;