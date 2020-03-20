import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';


class Task extends React.Component {
    constructor(props) {
        super();
        this.state = {
         task: props.task
        }

        
    }

   


    deleteTask(e) {
        this.props.deleteCallback(this.state.task.id)

    }
    toggleTaskStatus(e) {
        const newTask = {...this.state.task,
        isDone: !this.state.task.isDone
        }
        this.setState({task: newTask})
    }



    render() {
    return <div className={this.state.task.isDone?s.done:''}>
                            <input type="checkbox" checked={this.state.task.isDone}
                            onClick={this.toggleTaskStatus.bind(this)} />
                            {this.state.task.title}

                            <span className={s.delete} 
                            onClick={this.deleteTask.bind(this)}>X</span>
                        </div>
       
}
}

export default Task;