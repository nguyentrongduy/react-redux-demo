import React from 'react';
import {connect} from 'react-redux';

class InputForm extends React.Component{
    setShowForm(){
        // var dispatch = this.props.dispatch(); ~~
        let {dispatch} = this.props;
        dispatch({type: 'IS_ADDING'});
    }
    handleSubmit(e){
        e.preventDefault();
        let {dispatch} = this.props;
        if(this.refs.txt.value.length > 0)
        {
            dispatch({type: 'ADD_ITEM', value: this.refs.txt.value});
            // this.props.handleAdd(this.refs.txt.value);
            this.refs.txt.value = "";
            this.setShowForm();
        }
    }
    render(){
        if(this.props.isAdding)
            return(
                <form onSubmit={this.handleSubmit.bind(this)}>
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