import React from 'react';
import {connect} from 'react-redux';
import { ToggleIsAdding, AddItemToList } from '../../actions/test';

class InputForm extends React.Component{
    setShowForm(){
        this.props.dispatch(ToggleIsAdding());
    }
    onSubmit(e){
        e.preventDefault();
        if(this.refs.txt.value.length > 0)
        {
            this.props.dispatch(AddItemToList(this.refs.txt.value));
            this.refs.txt.value = "";
            this.setShowForm();
        }
    }
    render(){
        if(this.props.isAdding)
            return(
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" placeholder={"test name"} ref={"txt"} /> <br/>
                    <button>Add</button>
                </form>
            );
        return(
            <button onClick={this.setShowForm.bind(this)}>+</button>
        )
    }
}

export default connect((state) => {
    return {isAdding: state.isAdding}
})(InputForm)