import React, { useState, useEffect } from 'react';
import styles from './TradingForm1.module.scss';
import Work from '../../icons/work.png';
import Plus from '../../icons/plus.png';
import Skills from '../../icons/skills.png';
import { ArrowLeftIcon, ArrowRightIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel, IconButton, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react';




const TradingForm1 = (props) => {
    const {
        tradeData,
        setTradeData,
        changeTradeData,
        addTradeData,
        removeTrade,
        isTarget,
        setIsTarget,
        isSl,
        setIsSL,
        isExit,
        setIsExit,
        changeTradeValue,
    } = props;

    const [counter, setCounter] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [value1, setValue1] = useState(0);

    const plusOne = () => {

        if (pageCount === tradeData.length - 1) {
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
                </div>
            </div>
            <form className={styles.tradeForm}>
                <div className={styles.trade}>
                    {/* {tradeData.map((trade, index) => ( */}
                    <div className={styles.trade}>
                        {console.log(tradeData)}
                        <div className={styles.headline}>
                            <img src={Work} alt="Work" className={styles.icon} fill="currentColor" />
                            <h3>Trade #{pageCount + 1}</h3>

                            <div className={styles.divRemove}>
                                {tradeData.length > 1 &&
                                    <button
                                        type='button'
                                        title="remove"
                                        name="removeTrade"
                                        id={tradeData[counter].id}
                                        aria-label="Close"
                                        className={styles.buttonRemove}
                                        onClick={(e) => {
                                            removeTrade(e, pageCount);
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
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].trade}
                                placeholder='Strike Price'
                                name='trade'
                                type='text'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].entry}
                                placeholder='Entry'
                                name='entry'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].sl}
                                placeholder='StopLoss'
                                name='sl'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].target}
                                placeholder='Target'
                                name='target'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].exit}
                                placeholder='Exit Price'
                                name='exit'
                                type='number'
                                required
                            />
                            <input
                                className={styles.input2}
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].qty}
                                placeholder='Qty'
                                name='qty'
                                type='number'
                                required
                            />

                        </div>

                        <div className={styles.task}>
                            <textarea
                                className={styles.input}
                                id={tradeData[pageCount].id}
                                onChange={(e) => changeTradeData(e, tradeData[pageCount].id)}
                                value={tradeData[pageCount].description}
                                placeholder='Note to self'
                                name='description'
                                type='text'
                                rows={5}
                                cols={10}
                                required
                            />
                        </div>
                    </div>

                    {/* ))} */}  
                  
                </div>
                {
                    tradeData.length < 40 ? (
                        <div className={styles.addBtnTrade}>

                            <IconButton
                                colorScheme='teal'
                                className={styles.add}
                                onClick={() => {
                                    addTradeData();
                                    setCounter(tradeData.length)
                                    setPageCount(tradeData.length)
                                }}
                                aria-label="add"
                                icon={<PlusSquareIcon />}
                            />
                        </div>
                    ) : <h3>OverTrading!!!!You need to kill the switch</h3>
                }
            </form >
        </div >
    )
}

export default TradingForm1