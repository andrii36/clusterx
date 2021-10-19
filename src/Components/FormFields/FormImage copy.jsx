import React, { useState } from 'react'
import styles from './FormFields.module.css'

const FormImage = ({input, meta, ...props}) => {
  const [image, setImage] = useState([])
  let images = image.map(im => <ImageName name={im.name}/>)

  const onChange = (e) => {
    setImage([...image, e.target.files[0]])
  }
 return(
   <div>
    <div className={styles.addImage_block}>
      <label className={styles.addImage}>
        <input className={styles.dn} type={props.type} name={input.name} onChange={onChange}/>
        <div>Add images</div>
      </label>
      <div>{images}</div>
    </div>
   </div>
   
 )
}

const ImageName = (props) => {
  return(
    <>
      <div>{props.name}</div>
    </>
  )
}
export default FormImage