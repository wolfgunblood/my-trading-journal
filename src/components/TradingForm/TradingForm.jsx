import React from 'react';
import styles from './TradingForm.module.scss';
import Work from '../../icons/work.png';
import Plus from '../../icons/plus.png';
import Skills from '../../icons/skills.png';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'


const TradingForm = (props) => {
    const {
        tradeData,
        setTradeData,
        changeTradeData,
        addTradeData,
        removeTrade,
    } = props;
    return (
        <div className={styles.tradingForm}>
            <div className={styles.tradingFormTop}>
                <h2>Trading Journal</h2>
                <div className={styles.tradingFormArrow}>

                    <button className={styles.arrowLeftContainer}
                        onClick={() => { console.log("Arrow Lefty Clicked") }}
                    >
                        <ArrowLeftIcon color="#2e2e2e" />
                    </button>
                    <button className={styles.arrowRightContainer}
                        onClick={() => { console.log("Arrow Righty Clicked") }}
                    >
                        <ArrowRightIcon color="#2e2e2e" />
                    </button>
                </div>
            </div>
            <form className={styles.tradeForm}>
                <div className={styles.trade}>
                    {tradeData.map((trade, index) => (
                        <div key={trade.id} className={styles.trade}>
                            <div className={styles.headline}>
                                <img src={Work} alt="Work" className={styles.icon} fill="currentColor" />
                                <h3>Trade #{index + 1}</h3>

                                <div className={styles.divRemove}>
                                    {tradeData.length > 1 &&
                                        <button
                                            type='button'
                                            title="remove"
                                            name="removeTrade"
                                            id={trade.id}
                                            aria-label="Close"
                                            className={styles.buttonRemove}
                                            onClick={removeTrade}
                                        >
                                            Remove
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className={styles.eachtrade}>
                                <input
                                    className={styles.input}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.trade1}
                                    placeholder='CE Strike'
                                    name='trade1'
                                    type='text'
                                    required
                                />
                                <input
                                    className={styles.input2}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.sl1}
                                    placeholder='StopLoss'
                                    name='sl1'
                                    type='number'
                                    required
                                />
                                <input
                                    className={styles.input2}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.target1}
                                    placeholder='Target'
                                    name='target1'
                                    type='number'
                                    required
                                />
                                <input
                                    className={styles.input2}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.exit1}
                                    placeholder='Exit Price'
                                    name='exit1'
                                    type='number'
                                    required
                                />

                            </div>

                            <div className={styles.eachtrade}>
                                <input
                                    className={styles.input}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.trade2}
                                    placeholder='PE Strike'
                                    name='trade2'
                                    type='text'
                                    required
                                />
                                <input
                                    className={styles.input2}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.sl2}
                                    placeholder='StopLoss'
                                    name='sl2'
                                    type='number'
                                    required
                                />
                                <input
                                    className={styles.input2}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.target2}
                                    placeholder='Target'
                                    name='target2'
                                    type='number'
                                    required
                                />
                                <input
                                    className={styles.input2}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.exit2}
                                    placeholder='Exit Price'
                                    name='exit2'
                                    type='number'
                                    required
                                />

                            </div>
                            <div className={styles.task}>
                                <textarea
                                    className={styles.input}
                                    id={trade.id}
                                    onChange={(e) => changeTradeData(e, trade.id)}
                                    value={trade.description}
                                    placeholder='Note to self'
                                    name='description'
                                    type='text'
                                    required
                                />
                            </div>
                        </div>

                    ))}
                </div>
                {tradeData.length < 10 ? (<button
                    type="button"
                    className={styles.add}
                    onClick={addTradeData}
                    aria-label="add"
                >
                    <img
                        src={Plus}
                        alt="Plus"
                        className={styles.imgButton}

                    />New
                </button>) : <h3>OverTrading!!!!You need to kill the switch</h3>}
            </form>
        </div>
    )
}

export default TradingForm