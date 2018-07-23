import React, {Component} from 'react';
import Note from '../Note';
import InputForm from '../InputForm';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state = {arr: ['Nguyen Duy', 'Lung Linh']};
    }
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
                {this.state.arr.map((e, i) =>
                    <Note index={i} handleRemove={this.remove.bind(this)} key={i} >{e}</Note>
                )}
            </div>
        )
    }
}