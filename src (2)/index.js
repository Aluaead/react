import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
// import CustomLink from './containers/CustomLink';
import Counter from './Counter';
import ToDoList from './todoList';
ReactDOM.render(
    <div style={{padding: '30px'}}>
        <Counter />
        <ToDoList />
    </div>,
    document.getElementById('root')
);

