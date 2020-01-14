import React from "react"
import { reduxForm, Field } from "redux-form"

const LoginPage = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
     <div>
        <div> <Field placeholder={"Login"} name={"login"} component={"input"} /> </div>
        <div> <Field placeholder={"Password"} name={"password"} component={"input"} /> </div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me</div>
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
        console.log(formData);
        

    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm  onSubmit={onSubmit}/></div>
}





export default Login;