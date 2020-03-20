import React from 'react';
import 'antd/dist/antd.css';
import s from './Todolist.module.css';
import { Row, Col } from 'antd';



class TodolistFooter extends React.Component {
    constructor(props) {
        super();

    }





    render() {

        return <div className={s.footer}>
            <div>
                <span>5 items left</span>
            </div>
            <div className={s.buttons}>
                <button className={s.active}>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>
                Clear completed
            </div>


        </div>

    }
}

export default TodolistFooter;