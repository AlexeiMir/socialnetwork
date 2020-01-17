import React from "react"
import { reduxForm, Field } from "redux-form"
import {Input} from '../../FormsControls/FormsControls'
import { required,maxLengthCreator } from "../../utils/validators/validators"

const maxLenght20 = maxLengthCreator(20)

const LoginPage = (props) => {
    
    return (
    <form onSubmit={props.handleSubmit}>
     <div>
        <div> <Field placeholder={"Login"} name={"login"} component={Input} validate={[required,maxLenght20]} /> </div>
        <div> <Field placeholder={"Password"} name={"password"} component={Input} /> </div>
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
    const onLogin = (formData) => {
        console.log(formData);
        

    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  onSubmit={onLogin}/></div>
}





export default Login;