import React from 'react';
import Box from './box';
import Text from './text';
import Button from './button'


export function CardContainer({ children, ...props }) {
  return (
    <Button bg="white" borderRadius="normal" py={16} px={12} {...props}>
      <Box flex={1} borderLeftWidth={3} pl={12} borderLeftColor="light">
        { children }
      </Box>
    </Button>
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
    <Text color="textMedium" fontSize={12} mt={5}>
        { children }
    </Text>
  )
}

export default CardTitle;
