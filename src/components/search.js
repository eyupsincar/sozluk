import React from 'react';

import Box from './box';
import Text from './text';
import Input from './input';
import { Search } from './icons';

import Theme from '../utils/theme';

function SearchBox () {
  return (
    <Box position="relative">

        <Input
            bg="white"
            height={52}
            borderRadius="normal"
            color="textDark"
            pl={52}
            placeholder="Türkçe Sözlük'te Ara"
            placeholderTextColor="textMedium"
          />

          <Box position="absolute" left={16} top={12}>
            <Search color={Theme.colors.textMedium}/>
          </Box>
     </Box>
  )
}

export default SearchBox;
