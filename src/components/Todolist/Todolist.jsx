import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';
import Task from './Task'
import TodolistTaskCreator from './TodolistTaskCreator'
import TodolistFooter from './TodolistFooter'


class Todolist extends React.Component {
    constructor(props) {
        super();
        this.taskIndex = 2;
        this.state = {
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


    createNewTask(newTask) {
        
            this.setState({tasks: [...this.state.tasks,newTask]})
            
           
        
       

    }


    deleteTask (taskId) {

       const newTaskList= this.state.tasks.filter((t) => {
            return t.id !== taskId
       })
       this.setState({tasks:newTaskList})
    }
    

    render() {

        return <div className={s.toDoList}>
            <TodolistTaskCreator onCreatTask={this.createNewTask.bind(this)} />
            <div>
                <div  className={s.tasks}>

                    {this.state.tasks.map((task) => {

                        return <Task task={task}  deleteCallback={this.deleteTask.bind(this)} 
                         key={task.id} />
                    })

                    }
                </div>
            </div>
            <TodolistFooter />
        </div>
    }
}

export default Todolist;