import React, {Component} from 'react';
import {connect} from 'react-redux';
import { RemoveItemInList } from '../../actions/test';

class Note extends Component {
    removeNote(){
        let {index, dispatch} = this.props;
        dispatch(RemoveItemInList(index));
    }
    render(){
        return(
            <div>
                <div>{this.props.children}</div>
                <button onClick={this.removeNote.bind(this)}>delete</button>
            </div>
        )
    }
}

export default connect()(Note)