import React from 'react';
import { ActivityIndicator } from 'react-native';

import Text from './text';
import { CardContainer, CardSummary, CardTitle } from './card';
import Box from './box';


function SuggestionCard ({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>

        <CardContainer mt={5} onPress={onPress}>
          {data ? (
             <>
             <CardTitle>{data.madde}</CardTitle>
             <CardSummary>{data.anlam}.</CardSummary>
              </>
           ) : (
             <ActivityIndicator />
               )}
        </CardContainer>
      </Box>
  )
}

export default SuggestionCard;
