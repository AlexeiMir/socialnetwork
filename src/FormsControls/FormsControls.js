import React from 'react'
import styles from './FormsControls.module.css'
import {Field} from "redux-form"
import {required} from "../utils/validators/validators"
import 'antd/dist/antd.css';
import {Col, Input, Row} from 'antd';
const { TextArea } = Input;




export const FormControl = ({input,meta:{touched,error},children}) => {
    const hasErrors = error&&touched
    return <div className={styles.formControl+" "+(hasErrors?styles.error:'')}>
    <div>
    {children}
    </div>
   {hasErrors&&<span>{error}</span>}
    </div> 

}

export const InputComponent = (props) => {
   const {input,meta,child, ...restProps} = props;
   return <FormControl {...props}><Input size="small" {...input} {...restProps}  /> </FormControl>
}



export const TextareaComponent = (props) => {
    const {input,meta,child, ...restProps} = props;
    return <FormControl {...props}> <TextArea {...input} {...restProps} /> </FormControl>
 }

 export const createField = (placeholder,name,validators,component,props={}, text="") => (
     <div>
         <Field  placeholder={placeholder} name={name} validate={validators} component={component} {...props}/><span> {text}</span>
         </div>
 )

 