import React, {Component} from 'react';

export default class Note extends Component {
    removeNote(){
        var {index, handleRemove} = this.props;
        handleRemove(index);
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