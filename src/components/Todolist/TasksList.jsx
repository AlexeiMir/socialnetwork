import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import {Row, Col} from 'antd';
import Task from "./Task";


class TasksList extends React.Component {
    constructor(props) {
        super();

    }


    render() {
    return <div  className={s.tasks}>

        {this.props.tasks.map((task) => {

            return <Task task={task}  deleteCallback={this.props.onDelete}
                         onUpdate = {this.props.onUpdate}
                         key={task.id} />
        })

        }
    </div>
       
}
}

export default TasksList;