import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer/setAuthUserData';
import * as axios from 'axios';


class HeaderContainer extends React.Component {
    debugger;
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me
        `,{ withCredentials}=true).then(response => {
            if (this.props.setAuthUserData(response.data.resultCode) === 0) {
            this.props.setAuthUserData(response.data.data.login)
        }
        }); 

    }


    render() {
       return <Header {...this.props} />

    }
}

let mapStateToProps =(state) => {
    return {
    id: state.id,
    login: state.login,
    email: state.email,
    setAuthUserData: state.setAuthUserData
}
}

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
