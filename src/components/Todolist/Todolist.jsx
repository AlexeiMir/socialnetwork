import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';
import Task from './Task'


class Todolist extends React.Component {
    constructor(props) {
        super();
        this.state = {
            taskIndex:2,
            tasks: [
                {
                    id:0,
                    isDone: false,
                    title: 'learn js'
                },
                {
                    id:1,
                    isDone: false,
                    title: 'learn react'
                }
            ]
        }
    }


    createNewTask(e) {
        
        if (e.key === 'Enter') {
           
            this.setState({tasks: [...this.state.tasks, {title:e.currentTarget.value,isDone: false,id:this.state.taskIndex}]})
            e.currentTarget.value = '';
            this.taskIndex++
        }


    }


    deleteTask (taskId) {

       const newTaskList= this.state.tasks.filter((t) => {
            return t.id !== taskId
       })
       this.setState({tasks:newTaskList})
    }
    

    render() {

        return <div className={s.toDoList}>
            <div className={s.header}>

                    <input onKeyPress={this.createNewTask.bind(this)}/>

            </div>
            <div>
                <div  className={s.tasks}>

                    {this.state.tasks.map((task) => {

                        return <Task task={task}  deleteCallback={this.deleteTask} 
                         key={task.id} />
                    })

                    }
                </div>
            </div>
        </div>
    }
}

export default Todolist;