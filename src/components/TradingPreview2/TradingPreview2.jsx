import React from 'react';
import styles from './TradingPreview2.module.scss';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';


const Tradepreview2 = ({ tradeInfo,index }) => {
  const {
    tradeName,
    entry,
    exit,
    sl,
    target,
    qty,
    description,
  } = tradeInfo;
  return (
    <div className={styles.header}>
      <div className={styles.tableContainer}>
          <h3>{`Trade ${index+1}`}</h3>
          {/* {console.log(index)} */}
          <TableContainer className={styles.table}>
            <Table variant='simple'>
              <TableCaption>Trade data</TableCaption>
              <TableCaption>{description}</TableCaption>

              <Thead>
                <Tr>
                  <Th>Trade Name</Th>
                  <Th>Entry</Th>
                  <Th>Stop Loss</Th>
                  <Th>Target</Th>
                  <Th>Exit</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{tradeName}</Td>
                  <Td isNumeric>{entry}</Td>
                  <Td isNumeric>{sl}</Td>
                  <Td isNumeric>{target}</Td>
                  <Td isNumeric>{exit}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        
        
      </div>
    </div>
  )
}

export default Tradepreview2