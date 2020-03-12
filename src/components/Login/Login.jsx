import React from "react"
import { reduxForm, Field } from "redux-form"
import {InputComponent,createField} from '../../FormsControls/FormsControls'
import { required,maxLengthCreator } from "../../utils/validators/validators"
import { connect } from "react-redux"
import {login} from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"
import style from "../../FormsControls/FormsControls.module.css"
import { Row, Col,Button } from 'antd';
import 'antd/dist/antd.css';




const maxLenght20 = maxLengthCreator(20)

const LoginPage = ({handleSubmit,error,captchaUrl}) => {

    
    
    return (
      <Row align="middle">
        <Col span={8} offset={8} className={style.formGroup}>
        <h1>Login</h1>
    <form onSubmit={handleSubmit}>
     <div >
     {createField("Email", "email",[required,maxLenght20], InputComponent )}
     <i className={style.mtrlSelect}></i>
     {createField("Password", "password", [required], InputComponent, {type: "password"} )}
     <i className={style.mtrlSelect}></i>
     <Row><Col span={8} >{createField(null, "rememberMe",[], InputComponent, {type: "checkbox"}, "remember me" )}</Col></Row>
     

     {captchaUrl&&<img src={captchaUrl}/>}
        {captchaUrl&& createField("Symbols from image", "captcha", [required], InputComponent, {} )}

        <Row><Col span={16} offset={8} ><Button type="primary" htmlType="submit">Login</Button></Col></Row> 
        {error&&<div className={style.formSummaryError}>
            {error}
        </div>
        }
       
    </div>
    </form>
    </Col>
    </Row> 
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