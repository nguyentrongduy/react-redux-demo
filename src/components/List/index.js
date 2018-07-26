import React, {Component} from 'react';
import Note from '../Note';
import InputForm from '../InputForm';
import {connect} from 'react-redux';

class List extends Component{
    render(){
        return(
            <div>
                <InputForm />
                {this.props.arr.map((e, i) =>
                    <Note index={i} key={i} >{e}</Note>
                )}
            </div>
        )
    }
}

export default connect((state) => {
    return {arr: state.arr}
})(List);