import React from "react"
import { reduxForm, Field } from "redux-form"
import {Input,createField} from '../../FormsControls/FormsControls'
import { required,maxLengthCreator } from "../../utils/validators/validators"
import { connect } from "react-redux"
import {login} from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"
import style from "../../FormsControls/FormsControls.module.css"
import 'antd/dist/antd.css';



const maxLenght20 = maxLengthCreator(20)

const LoginPage = ({handleSubmit,error,captchaUrl}) => {
    
    return (
    <form onSubmit={handleSubmit}>
     <div>
     {createField("Email", "email",[required,maxLenght20], Input )}
     {createField("Password", "password", [required], Input, {type: "password"} )}
     {createField(null, "rememberMe",[], Input, {type: "checkbox"}, "remember me" )}

     {captchaUrl&&<img src={captchaUrl}/>}
        {captchaUrl&& createField("Symbols from image", "captcha", [required], Input, {} )}

        <div> <button>Login</button>  </div>
        {error&&<div className={style.formSummaryError}>
            {error}
        </div>
        }
       
    </div>
    </form>
)
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginPage)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha);  
    }

    if (props.isAuth) return <Redirect to={"/profile"} />


    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  onSubmit={onSubmit} captchaUrl={props.captchaUrl}/></div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
 }


export default connect(mapStateToProps, {login})(Login);