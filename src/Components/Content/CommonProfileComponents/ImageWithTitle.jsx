import React from 'react';
import styles from '../RealEstatePage/RealEstateProfile.module.css';
import left from '../../../Assets/left_arrow.png';
import right from '../../../Assets/right_arrow.png';

const ImageWithTitle = (props) => {
    let slideImage = (switchMode) => {
        props.setImageOnArrowClick(switchMode)
    }
    
    return (
        <div className={styles.block1}>
            <h1>{props.title}</h1>
            <div>
                <span onClick={() => slideImage("left")}><img src={left}  className={styles.imgArrows}/></span>
                <img src={props.image} className={styles.mainImg}/>
                <span onClick={() => slideImage("right")}><img src={right} className={styles.imgArrows} /></span>
            </div>
            <div className={styles.price}>{props.price}</div>
            <div className={styles.block4}>
                <div className={styles.description}>
                    <h3>Description</h3>
                    <div>{props.description}</div>
                </div>
            </div>
        </div>
    )
}
export default ImageWithTitle;