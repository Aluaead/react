import React, { Component } from 'react';
import store from './store';
export default class TodoList extends Component {
    constructor() {
        super();
        console.log(store.getState().todo);
        this.state = {
            list:store.getState().todo.list
        }
        store.subscribe(() => {
            this.setState({
                list:store.getState().todo.list
            })
        });
    }
    handleAdd = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        if(event.keyCode === 13) {
            let action = {type: 'add_item', value: event.target.value};
            store.dispatch(action);
            event.target.value = '';
        }
    }
    delItem = (index,event) => {
        console.log(index)
        // console.log(event);
        // console.log(event.target);
        let action = {type:'del_item',value: index};
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd} /><br />
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key={index}>{item}<button onClick={this.delItem.bind(this,index)}>删除</button> </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
