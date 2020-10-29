import React from 'react';
import Box from './box';
import Text from './text';


export function CardContainer({ children, ...props }) {
  return (
    <Box bg="white" borderRadius="normal" py={16} px={12} {...props}>
      <Box borderLeftWidth={3} pl={12} borderLeftColor="light">
        { children }
      </Box>
    </Box>
  )
}


export function CardTitle({ children }) {
  return (
    <Text fontSize={14} fontWeight="bold">
        { children }
    </Text>
  )
}


export function CardSummary({ children }) {
  return (
    <Text fontSize={12}>
        { children }
    </Text>
  )
}

export default CardTitle;
