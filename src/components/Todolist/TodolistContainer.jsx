import React from 'react';
import {connect} from 'react-redux'
import {postTask} from "../../redux/todo-reducer";
import Todolist from "./Todolist";




class TodolistContainer extends React.Component {




    render() {
        return <div>
            <Todolist tasks={this.props.tasks} postTask={this.postTask.bind(this)}/>
        </div>

    }
    

}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{postTask})(TodolistContainer);