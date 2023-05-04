import React from 'react';
import styles from './HeaderPreview1.module.scss'

const HeaderPreview1 = ({tdate,settdate}) => {
    
    

    return (
        <div >
            <div className={styles.header}>
                {tdate}
            </div>
        </div>
    )
}

export default HeaderPreview1