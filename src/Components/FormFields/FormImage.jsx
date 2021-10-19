import React, { useState } from 'react'
import styles from './FormFields.module.css'

const FormImage = ({input, meta, ...props}) => {

 return(
   <div>
     <input {...input}{...props}/>
   </div>
   
 )
}

export default FormImage