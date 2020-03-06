import React from "react"
import { reduxForm, Field } from "redux-form"
import {InputComponent,createField} from '../../FormsControls/FormsControls'
import { required,maxLengthCreator } from "../../utils/validators/validators"
import { connect } from "react-redux"
import {login} from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"
import style from "../../FormsControls/FormsControls.module.css"
import 'antd/dist/antd.css';
import { Form, Button, Checkbox } from 'antd';



const maxLenght20 = maxLengthCreator(20)

const LoginPage = ({handleSubmit,error,captchaUrl}) => {

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
    
    return (
    <form name="basic" {...layout} >
    <form onSubmit={handleSubmit}>
     <div>
     {createField("Email", "email",[required,maxLenght20], InputComponent )}
     {createField("Password", "password", [required], InputComponent, {type: "password"} )}
     {createField(null, "rememberMe",[], InputComponent, {type: "checkbox"}, "remember me" )}

     {captchaUrl&&<img src={captchaUrl}/>}
        {captchaUrl&& createField("Symbols from image", "captcha", [required], InputComponent, {} )}

         <button type="primary" htmlType="submit">Login</button> 
        {error&&<div className={style.formSummaryError}>
            {error}
        </div>
        }
       
    </div>
    </form>
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


/*Form.Item label="Username" name="username">{createField("Email", "email",[required,maxLenght20], InputComponent )}</Form.Item>
     <Form.Item label="Password" name="password">{createField("Password", "password", [required], InputComponent, {type: "password"} )}</Form.Item>
     <Form.Item {...tailLayout} name="remember" valuePropName="checked">{createField(null, "rememberMe",[], InputComponent, {type: "checkbox"}, "remember me" )}</Form.Item>

     {captchaUrl&&<img src={captchaUrl}/>}
        {captchaUrl&& createField("Symbols from image", "captcha", [required], InputComponent, {} )}

        <Form.Item {...tailLayout}> <Button type="primary" htmlType="submit" >Login</Button>  </Form.Item> */