import React from 'react';
import styles from './InstrumentOption.module.scss';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';


const InstrumentOption = ({ isEquity, setIsEquity }) => {

    const dateChange = () => {
    }
    return (
        <div className={styles.label}>
            <div className={styles['label-header']}>
                <h2>Instrument of Trade</h2>
                <form >
                    <label htmlFor="q1-a1">
                        <input type="radio" id="q1-a1" name="q1" value={isEquity} onChange={() => setIsEquity(true)} />
                        Equity
                    </label>
                    <label htmlFor="q1-a2">
                        <input type="radio" id="q1-a2" name="q1" value={isEquity} onChange={() => setIsEquity(false)} />
                        Options
                    </label>
                </form>
              

            </div>
        </div>
    )
}

export default InstrumentOption