import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';


class Todolist extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tasks: [
                {
                    isDone: false,
                    title: 'learn js'
                },
                {
                    isDone: false,
                    title: 'learn react'
                }
            ]
        }
    }


    createNewTask(e) {
        if (e.key === 'Enter') {
            this.setState({tasks: [...this.state.tasks, {title:e.currentTarget.value,isDone: false}]})
            e.currentTarget.value = ''
        }


    }

    toggleTaskStatus (task,e)  {
        task.isDone = !task.isDone;
        this.forceUpdate();


    }

    deleteTask (task, e) {

        this.setState({tasks: this.state.tasks.filter((t) => {
            return t !== task
        })})
    }

    render() {

        return <div className={s.toDoList}>
            <div className={s.header}>

                    <input onKeyPress={this.createNewTask.bind(this)}/>

            </div>
            <div>
                <div  className={s.tasks}>

                    {this.state.tasks.map((task) => {

                        return <div className={this.state.isDone?s.done:''}>
                            <input type="checkbox"
                                   onClick={this.toggleTaskStatus.bind(this,task)}/>
                            {task.title}

                            <span className={s.delete} onClick={this.deleteTask.bind(this, task)}>X</span>
                        </div>
                    })

                    }
                </div>
            </div>
        </div>
    }
}

export default Todolist;