import React from 'react';
import styles from './DatePicker.module.scss';

const DatePicker = ({ tdate, setTdate }) => {

    const dateChange = (e) => {

        setTdate(e.target.value);
        console.log(e.target.value);
        console.log(tdate);

    }
    return (
        <div className={styles.label}>
            <div className={styles.label1}>
                <input type='text' placeholder='Index Opening Price' />
                <input type='text' placeholder='Straddle Opening Price' />
                <input type='text' placeholder='VIX' />
            </div>
            <div className={styles['label-header']}>
                <form >
                    <input type="date" value={tdate} onChange={dateChange} />
                </form>
                <input type="number" placeholder='Max Loss for Today' />
            </div>
        </div>
    )
}

export default DatePicker