import React, { useState, useEffect } from 'react';
import styles from './TradingForm2.module.scss';
import Work from '../../icons/work.png';
import Plus from '../../icons/plus.png';
import Skills from '../../icons/skills.png';
import { ArrowLeftIcon, ArrowRightIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';



const TradingForm2 = (props) => {
    const {
        equityData,
        setEquityData,
        changeEquityData,
        addEquityData,
        removeEquity,
    } = props;

    const [counter, setCounter] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const plusOne = () => {

        if (pageCount === equityData.length - 1) {
            return;
        }
        else {
            setPageCount((prev) => prev + 1);

        }

    }

    const minusOne = () => {

        if (pageCount === 0) {
            return;
        } else {
            setPageCount((prev) => prev - 1);

        }
    }
    const errorCheck = () => {

        // if(pageCount === 0 )
        // {
        //     if(counter === 1){
        //         setPageCount(0);
        //         return ;
        //     }
        if (pageCount === 0) {
            setPageCount(0);

        } else {
            setPageCount((prev) => prev - 1);
        }
    };

    return (
        <div className={styles.tradingForm}>
            <div className={styles.tradingFormTop}>
                <h2>Trading Journal</h2>
                <div className={styles.tradingFormArrow}>

                    <IconButton
                        colorScheme='teal'
                        aria-label='Call Segun'

                        icon={<ArrowLeftIcon />}
                        onClick={minusOne}
                    />
                    <IconButton
                        colorScheme='teal'
                        aria-label='Call Segun'

                        icon={<ArrowRightIcon />}
                        onClick={plusOne}
                    />
                    {/* {console.log(pageCount)} */}
                    {/* {console.log(counter)} */}
                    {/* {console.log(equityData)} */}
                </div>
            </div>
            <form className={styles.tradeForm}>
                <div className={styles.trade}>
                    {/* {tradeData.map((trade, index) => ( */}
                    <div className={styles.trade}>

                        <div className={styles.headline}>
                            <img src={Work} alt="Work" className={styles.icon} fill="currentColor" />
                            <h3>Trade #{pageCount + 1}</h3>

                            <div className={styles.divRemove}>
                                {equityData.length > 1 &&
                                    <button
                                        type='button'
                                        title="remove"
                                        name="removeTrade"
                                        id={equityData[counter].id}
                                        aria-label="Close"
                                        className={styles.buttonRemove}
                                        onClick={(e) => {
                                            removeEquity(e, pageCount);
                                            setCounter((prev) => prev - 1);
                                            errorCheck();
                                        }}
                                    >
                                        Remove
                                    </button>
                                }
                            </div>
                        </div>
                        <div className={styles.eachtrade}>
                            <input
                                className={styles.input}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].tradeName}
                                placeholder='Stock Name'
                                name='tradeName'
                                type='text'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].entry}
                                placeholder='Entry'
                                name='entry'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].sl}
                                placeholder='StopLoss'
                                name='sl'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].target}
                                placeholder='Target'
                                name='target'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].exit}
                                placeholder='Exit Price'
                                name='exit'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].qty}
                                placeholder='Qty'
                                name='qty'
                                type='number'
                                required
                            />

                        </div>


                        <div className={styles.task}>
                            <textarea
                                className={styles.input}
                                id={equityData[pageCount].id}
                                onChange={(e) => changeEquityData(e, equityData[pageCount].id)}
                                value={equityData[pageCount].description}
                                placeholder='Note to self'
                                name='description'
                                type='text'
                                required
                            />
                        </div>
                    </div>

                    {/* ))} */}
                </div>
                {equityData.length < 10 && pageCount === counter ? (
                    <div className={styles.addBtnEquity}>
                        <IconButton
                            colorScheme='teal'
                            className={styles.add}
                            onClick={() => {
                                addEquityData();
                                setCounter(equityData.length)
                                setPageCount(equityData.length)
                            }}
                            aria-label="add"
                            icon={<PlusSquareIcon />}
                        />
                    </div>
                ) : <h3>OverTrading!!!!You need to kill the switch</h3>}
            </form>
        </div>
    )
}
export default TradingForm2