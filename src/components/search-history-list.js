import React from 'react';
import { FlatList } from 'react-native';

import Box from './box';
import Text from './text';
import { SimpleCardContainer, SimpleCardTitle } from './simple-card';




function SearchHistoryList({data}) {
  return (
    <FlatList
    style={{ padding: 16}}
    data={data}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
    <Box py={2}>
      <SimpleCardContainer>
        <SimpleCardTitle>{item.title}</SimpleCardTitle>
      </SimpleCardContainer>
    </Box>
    )}
    ListHeaderComponent={
      <Text color="textLight" mb={5}>
          Son Aramalar
      </Text>
    }
 />
);
}

export default SearchHistoryList;
