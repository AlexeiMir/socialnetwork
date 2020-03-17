import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import { Row, Col } from 'antd';


class Todolist extends React.Component {

    state = {
        editeMode: false,
        tasks: ['learn js', 'learn react']
    }

    addTask = (e) =>{
        this.setState({task:e.currentTarget.value})

    }

    toggleTaskStatus(){

    }

    deleteTask() {
        this.setState(...this.state, this.state.tasks.filter())
    }

    render() {

        return <Row>
            <Row>
                <Col span={8} >
                    <input onChange={this.addTask.bind(this)} value = {this.state.task}/>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
    {this.state.tasks.map((task)=>{ return <Row>
        <Col span={6}><input type="checkbox" onChange={this.toggleTaskStatus.bind(this)}/></Col>
        <Col span={12}>{task}
    </Col>
    <Col span={6} className={s.delete} onChange={this.deleteTask.bind(this,task)}></Col>
    </Row>})
    
    }
                </Col>
            </Row>
        </Row>
    }
}
export default Todolist;