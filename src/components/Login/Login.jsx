import React from "react"
import { reduxForm, Field } from "redux-form"
import {Input} from '../../FormsControls/FormsControls'
import { required,maxLengthCreator } from "../../utils/validators/validators"
import { connect } from "react-redux"
import {login} from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"

const maxLenght20 = maxLengthCreator(20)

const LoginPage = (props) => {
    
    return (
    <form onSubmit={props.handleSubmit}>
     <div>
        <div> <Field placeholder={"email"} name={"email"} component={Input} validate={[required,maxLenght20]} /> </div>
        <div> <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} /> </div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me</div>
        <div> <button>Login</button>  </div>
    </div>
    </form>
)
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginPage)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);  
    }

    if (props.isAuth) return <Redirect to={"/profile"} />


    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  onSubmit={onSubmit}/></div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
 }


export default connect(mapStateToProps, {login})(Login);