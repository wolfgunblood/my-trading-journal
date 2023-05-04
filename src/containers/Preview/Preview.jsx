import React, { useState } from 'react';
import EducationPreview from '../../components/EducationPreview/EducationPreview';
import HeaderPreview1 from '../../components/HeaderPreview/HeaderPreview1';
import Tradepreview from '../../components/TradePreview/Tradepreview';
import styles from './Preview.module.scss';
import { ArrowLeftIcon, ArrowRightIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import Tradepreview2 from '../../components/TradingPreview2/TradingPreview2';


const Preview = (props) => {
  const {
    userInfo,
    educationInfo,
    mobile,
    tdate,
    setTdate,
    tradeData,
    isEquity,
    equityData,
  } = props;

  const len = tradeData.length;
  const len1 = equityData.length;
  // const len = tradeData.length;

  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);

  const plusOne = () => {
    if (index < len - 2) {
      setIndex(index + 1);
    }
  }

  const plusOne1 = () => {
    if (index1 < len1 - 2) {
      setIndex1(index1 + 1);
    }
  }
  const minusOne = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const minusOne1 = () => {
    if (index1 > 0) {
      setIndex1(index1 - 1);
    }
  }

  return (
    <div id='preview' className={!mobile ? styles.preview : styles.notDisplayed}>
      <HeaderPreview1
        userInfo={userInfo}
        tdate={tdate}
        setTdate={setTdate}
      />
      {/* <div className={styles.info} > */}
      {/* {console.log(value)} */}


      < Tradepreview
        tradeInfo={tradeData}
      />



      <div className={styles.btnPreview}>

        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          variant="outline"
          icon={<ArrowBackIcon />}
          onClick={() => { !isEquity ? minusOne() : minusOne1() }}
        />
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          variant="outline"
          icon={<ArrowForwardIcon />}
          onClick={() => { !isEquity ? plusOne() : plusOne1() }}
        />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Preview