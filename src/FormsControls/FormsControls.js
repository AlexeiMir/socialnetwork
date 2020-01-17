import React from 'react'
import styles from './FormsControls.module.css'



export const FormControl = ({input,meta,child, ...props}) => {
    const hasErrors = meta.error&&meta.touched
    return <div className={styles.formControl+" "+(hasErrors?styles.error:'')}>
    <div>
    {props.children}
    </div>
   {hasErrors&&<span>{meta.error}</span>}
    </div> 

}

export const Input = (props) => {
   const {input,meta,child, ...restProps} = props;
   return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const Textarea = (props) => {
    const {input,meta,child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
 }