import React from 'react';
import styles from './Form.module.scss';
import AppLabel from '../../components/AppLabel/AppLabel';
// import PersonalForm from '../../components/PersonalForm/PersonalForm';
// import EducationForm from '../../components/EducationForm/EducationForm';
// import PracticalForm from '../../components/PracticalForm/PracticalForm';
import DatePicker from '../../components/DatePicker/DatePicker';
import TradingForm from '../../components/TradingForm/TradingForm';
import TradingForm1 from '../../components/TradingForm1/TradingForm1';
import TradingForm2 from '../../components/TradingForm2/TradingForm2';
import InstrumentOption from '../../components/InstrumentOption/InstrumentOption';
import { IconButton } from '@chakra-ui/react'

const Form = (props) => {
  const {
    userInfo,
    changeUserInfo,
    educationInfo,
    changeEducationInfo,
    experience,
    newExperience,
    skills,
    newSkill,
    changeExperience,
    changeSkill,
    printDoc,
    addExperience,
    removeExp,
    addSkill,
    removeSkill,
    mobile,
    tradeData,
    setTradeData,
    changeTradeData,
    addTradeData,
    removeTrade,
    tdate,
    setTdate,
    isEquity,
    setIsEquity,
    equityData,
    setEquityData,
    changeEquityData,
    addEquityData,
    removeEquity,
    isTarget,
    setIsTarget,
    isSl,
    setIsSL,
    isExit,
    setIsExit,
  } = props;

  return (
    <div className={mobile ? styles['form'] : styles['notDisplayed']}>
      <AppLabel
        printDoc={printDoc}
      />
        <DatePicker
          tdate={tdate}
          setTdate={setTdate}
        />
      {!isEquity &&
        <TradingForm1
          tradeData={tradeData}
          setTradeData={setTradeData}
          changeTradeData={changeTradeData}
          addTradeData={addTradeData}
          removeTrade={removeTrade}
          isTarget = {isTarget}
          setIsTarget = {setIsTarget}
          isSl = {isSl}
          setIsSL = {setIsSL}
          isExit = {isExit}
          setIsExit = {setIsExit}

        />
      }
      {isEquity &&
        <TradingForm2
          equityData={equityData}
          setEquityData={setEquityData}
          changeEquityData={changeEquityData}
          addEquityData={addEquityData}
          removeEquity={removeEquity}
          />
      }
    </div>
  )
}

export default Form