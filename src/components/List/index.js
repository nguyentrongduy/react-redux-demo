import React, {Component} from 'react';
import Note from '../Note';
import InputForm from '../InputForm';
import {connect} from 'react-redux';

class List extends Component{
    remove(index){
        this.state.arr.splice(index, 1);
        this.setState(this.state);
    }
    add(value){
        this.state.arr.push(value);
        this.setState(this.state);
    }
    render(){
        return(
            <div>
                <InputForm handleAdd={this.add.bind(this)} />
                {console.log(this.props)}
                {this.props.arr.map((e, i) =>
                    <Note index={i} handleRemove={this.remove.bind(this)} key={i} >{e}</Note>
                )}
            </div>
        )
    }
}

export default connect((state) => {
    return {arr: state.arr}
})(List);