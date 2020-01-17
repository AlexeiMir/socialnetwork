import React from 'react'
import styles from './FormsControls.module.css'



export const Textarea = ({input,meta, ...restProps}) => {
    const hasErrors = meta.error&&meta.touched
    return <div className={styles.formControl+" "+(hasErrors?styles.error:'')}>
    <div>
    <textarea {...input} {...restProps}/>
    </div>
   {hasErrors&&<span>{meta.error}</span>}
    </div> 

}