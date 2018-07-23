import React from 'react';

export default class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {isAdding: false}
    }
    setShowForm(){
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.refs.txt.value.length > 0)
        {
            this.props.handleAdd(this.refs.txt.value)
            this.refs.txt.value = "";
            this.setShowForm();
        }
    }
    render(){
        if(this.state.isAdding)
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