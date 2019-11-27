import React from 'react';

function EditTrue(props){
        return (
                <div className='task'>
                    <input type="text" value={props.value} autoFocus={true} onChange={e => {props.handleChange(e.target.value)}}/>
                    <button onClick={props.confirmMod}>Confirm</button>
                    <button onClick={props.cancelMod}>Cancel</button>
                </div>
            );
}

export default EditTrue;
