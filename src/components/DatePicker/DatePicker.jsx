import React from 'react';
import styles from './DatePicker.module.scss';

const DatePicker = ({tdate,setTdate}) => {

    const dateChange = (e) => {
        
        setTdate(e.target.value);
        console.log(e.target.value);
        console.log(tdate);

    }
    return (
        <div className={styles.label}>
            <div className={styles['label-header']}>
                <h2>Date of Trade</h2>
                <form >
                    <input type="date" value={tdate} onChange={dateChange} />    
                </form>  
            </div>
        </div>
    )
}

export default DatePicker