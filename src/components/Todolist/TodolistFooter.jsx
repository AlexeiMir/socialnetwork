import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import { Row, Col } from 'antd';



class TodolistFooter extends React.Component {

    onhandleFilter(e){
        this.props.onFilterChange(e.currentTarget.dataset.value)
    }

    clearComptetedTasks(){
        this.props.clearCompleted()
    }


    render() {
        let {tasks,filter} = this.props

        return <div className={s.footer}>
            <div>
                <span>{tasks.filter((t)=>!t.isDone).length} left items</span>
            </div>
            <div className={s.buttons}>
                <button className={filter==='all'?s.selected:''} data-value="all"
                        onClick={this.onhandleFilter.bind(this)}>All</button>
                <button className={filter==='active'?s.selected:''} data-value="active"
                        onClick={this.onhandleFilter.bind(this)}>Active</button>
                <button className={filter==='completed'?s.selected:''} data-value="completed"
                        onClick={this.onhandleFilter.bind(this)}>Completed</button>
            </div>
            <div>
                <span onClick={this.clearComptetedTasks.bind(this)}>Clear completed</span>
            </div>


        </div>

    }
}

export default TodolistFooter;