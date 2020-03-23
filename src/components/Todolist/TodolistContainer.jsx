import React from 'react';
import {connect} from 'react-redux'




class TodolistContainer extends React.Component {




    render() {
        return <div>
            <Todolist tasks={this.props.tasks} />
        </div>

    }
    

}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{})(TodolistContainer);