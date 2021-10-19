import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import styles from './FormFields.module.css'

const FormDescription = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error
  return(
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
        <FormControl
          placeholder="Description"
          aria-label="Description"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    
      // <div className="form-group">
      //   <label>Description</label>
      //   <input className={hasError ? `${styles.input_error} form-control` : "form-control"} {...props} {...input}/>
      //   <div className={styles.text_error}>{meta.touched && meta.error}</div>
      // </div>
  )
}
export default FormDescription