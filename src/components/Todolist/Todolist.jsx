import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';
import Task from './Task'
import TodolistTaskCreator from './TodolistTaskCreator'
import TodolistFooter from './TodolistFooter'
import TasksList from "./TasksList";


class Todolist extends React.Component {
    constructor(props) {
        super();
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
            ],
            filter:'all'
        }
    }

    onFilterChange(dataFilter){
        this.setState({filter:dataFilter})
    }



    updateTask(task) {
        
            const newTasksList = [...this.state.tasks]
        newTasksList.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone
                return

            }
        })
        this.setState({tasks:newTasksList})

    }


    deleteTask (taskId) {

       const newTaskList= this.state.tasks.filter((t) => {
            return t.id !== taskId
       })
       this.setState({tasks:newTaskList})
    }

    createNewTask (task) {
        this.setState({tasks:[...this.state.tasks,task]})

    }

    clearCompleted(){
        this.setState({tasks:this.state.tasks.filter((t)=> !t.isDone)})
    }
    

    render() {
        let {tasks,filter} = this.state

        let filteredTasks = []
        if (this.state.filter === "all") {filteredTasks = this.state.tasks }
        if (this.state.filter === "active") {filteredTasks = this.state.tasks.filter((t) => !t.isDone)}
        if (this.state.filter === "completed") {filteredTasks = this.state.tasks.filter((t) => t.isDone) }

        return <div className={s.toDoList}>
            <TodolistTaskCreator onCreatTask={this.createNewTask.bind(this)} />

            <TasksList onDelete = {this.deleteTask.bind(this)}
                                    onUpdate = {this.updateTask.bind(this)}
                                    tasks={filteredTasks}
            />

            <TodolistFooter onFilterChange={this.onFilterChange.bind(this)} filter={filter}
            tasks={tasks} clearCompleted = {this.clearCompleted.bind(this)}
            />
        </div>
    }
}

export default Todolist;