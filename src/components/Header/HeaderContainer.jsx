import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';




class HeaderContainer extends React.Component {

    componentDidMount() {

        this.props.getAuthUserData();


        /*usersAPI.AuthUserData().then(response => {
            if ((response.data.resultCode) === 0) {
                let {id, login, email} = response.data.data;
                
            this.props.setAuthUserData(id, login, email)
           
        }
        }); */

    } 


    render() {
       return <Header {...this.props} />

    }
}

let mapStateToProps =(state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    

    }
    
}

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);
