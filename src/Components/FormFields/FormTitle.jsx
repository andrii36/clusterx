import React from 'react'
import styles from './FormFields.module.css'

const FormTitle = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error
    return(
        <div className="form-group">
          <label>Title</label>
          <input className={hasError ? `${styles.input_error} form-control` : "form-control"} {...props} {...input}/>
          <div className={styles.text_error}>{meta.touched && meta.error}</div>
        </div>
    )
}
export default FormTitle