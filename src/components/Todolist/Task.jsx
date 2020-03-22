import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';


class Task extends React.Component {
    constructor(props) {
        super();

    }


    deleteTask(e) {
        this.props.deleteCallback(this.props.task.id)

    }
    toggleTaskStatus(e) {
        const task = {...this.props.task}
        task.isDone = !task.isDone
        this.props.onUpdate(task)
        }





    render() {
    return <div className={this.props.task.isDone?s.done:''}>
                            <input type="checkbox" checked={this.props.task.isDone}
                            onClick={this.toggleTaskStatus.bind(this)} />
                            {this.props.task.title}

                            <span className={s.delete} 
                            onClick={this.deleteTask.bind(this)}>X</span>
                        </div>
       
}
}

export default Task;