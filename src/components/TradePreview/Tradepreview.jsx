import React, { useEffect } from 'react';
import styles from './TradePreview.module.scss';
import { Badge } from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

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

const Tradepreview = ({ tradeInfo, index }) => {
  const {
    trade1,
    trade2,
    entry1,
    entry2,
    sl1,
    sl2,
    target1,
    target2,
    exit1,
    exit2,
    qty1,
    qty2,
    description,
    value,
  } = tradeInfo;

  const total = qty1 * (exit1 - entry1) + qty2 * (exit2 - entry2);
  const isTotal = total <  0 ? true : false;


  return (
    <div className={styles.header}>
      <div className={styles.tableContainer}>
        <h3>{`Trade ${index + 1}`}</h3>
        {/* {console.log(index)} */}
        <TableContainer className={styles.table}>
          <Table variant='simple'>
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
                <Td>{trade1}</Td>
                <Td>{entry1}</Td>
                <Td>{sl1}</Td>
                <Td isNumeric>{target1}</Td>
                <Td isNumeric>{exit1}</Td>
              </Tr>
              <Tr>
                <Td>{trade2}</Td>
                <Td>{entry2}</Td>
                <Td>{sl2}</Td>
                <Td isNumeric>{target2}</Td>
                <Td isNumeric>{exit2}</Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
        <Stat>
          <StatLabel>Totl Profit Loss</StatLabel>
          <StatNumber>{total}</StatNumber>
          <StatHelpText>
          { total === 0 ? <Badge colorScheme='gray'>No Profit/Loss</Badge> : isTotal ? <Badge colorScheme='red'>Loss</Badge> : <Badge colorScheme='green'>Profit</Badge>}
          </StatHelpText>
        </Stat>
      </div>
    </div>
  )
}

export default Tradepreview