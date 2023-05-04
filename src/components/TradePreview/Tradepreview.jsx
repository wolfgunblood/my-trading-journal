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
import { Text } from '@chakra-ui/react'

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

  return (
    <div className={styles.header}>
      <div className={styles.tableContainer}>
        <h3>{`Trade Table`}</h3>
        {/* {console.log(index)} */}
        <TableContainer className={styles.table} size="sm">
          <Table variant='simple' >
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Trade Name</Th>
                <Th>Entry</Th>
                <Th>Stop Loss</Th>
                <Th>Exit</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tradeInfo.map((trade, index) => (
                <Tr key={index}>
                  <Td>{trade.trade}</Td>
                  <Td>{trade.entry}</Td>
                  <Td>{trade.sl}</Td>
                  <Td isNumeric>{trade.exit}</Td>
                  <Td isNumeric>
                    <div className={styles.descriptionTable}>
                      <Text>
                        {trade.description}
                        </Text>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        {/* <Stat>
          <StatLabel>Totl Profit Loss</StatLabel>
          <StatNumber>{total}</StatNumber>
          <StatHelpText>
          { total === 0 ? <Badge colorScheme='gray'>No Profit/Loss</Badge> : isTotal ? <Badge colorScheme='red'>Loss</Badge> : <Badge colorScheme='green'>Profit</Badge>}
          </StatHelpText>
        </Stat> */}
      </div>
    </div>
  )
}

export default Tradepreview