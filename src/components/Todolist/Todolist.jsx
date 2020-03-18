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


    createNewTask = (e) => {
        if (e.key === 'Enter') {
            this.setState({tasks: [...this.state.tasks, {title:e.currentTarget.value,isDone: false}]})
            e.currentTarget.value = ''
        }


    }

    toggleTaskStatus() {

    }

    deleteTask(task, e) {
        this.setState({tasks: this.state.tasks.filter((t) => {
            return t!== task
        })})
    }

    render() {

        return <Row className={s.toDoList}>
            <Row>
                <Col span={8}>
                    <input onKeyPress={this.createNewTask.bind(this)}/>
                </Col>
            </Row>
            <Row>
                <Col span={8} className={s.task}>
                    {this.state.tasks.map((task) => {
                        return <Row>
                            <Col span={6}><input type="checkbox" onChange={this.toggleTaskStatus.bind(this)}/></Col>
                            <Col span={12}>{task.title}
                            </Col>
                            <Col span={6} className={s.delete} onChange={this.deleteTask.bind(this, task)}>X</Col>
                        </Row>
                    })

                    }
                </Col>
            </Row>
        </Row>
    }
}

export default Todolist;