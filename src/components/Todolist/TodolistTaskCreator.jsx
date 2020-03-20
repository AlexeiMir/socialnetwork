import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';
import Task from './Task'


class TodolistTaskCreator extends React.Component {
    constructor(props) {
        super();
        this.taskIndex = 2;
    }


    createNewTask(e) {
        
        if (e.key === 'Enter') {
            const newTask = {
                id:this.taskIndex,
                isDone:false,
                title: e.currentTarget.value
            }
            this.props.onCreatTask(newTask);
            this.taskIndex++
            e.currentTarget.value = '';
        }
       

    }

    

    render() {

        return <div className={s.header}>

                    <input onKeyPress={this.createNewTask.bind(this)}/>

            </div>
            
    }
}

export default TodolistTaskCreator;