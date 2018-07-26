import React, {Component} from 'react';
import {connect} from 'react-redux';

class Note extends Component {
    removeNote(){
        let {index, dispatch} = this.props;
        dispatch({type: 'REMOVE_ITEM', index});
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