import {Button, ImageBackground} from 'react-native';
import * as React from 'react';

import { Logo } from '../components/icons';
import Box from '../components/box';
import Search from '../components/search';
import bg from '../assets/bg.jpg';

function SearchView({ navigation }) {
    return (
        <Box>
          <Box as={ImageBackground} source={bg} style={{width:"100%"}}>
            <Box py={20} left={115}>
              <Logo width={120} color="white" />
            </Box>
          </Box>
          <Button title="Go to Details"
            onPress={() => navigation.navigate('Detail')}
          />
          <Box p={10}>
            <Search />
          </Box>
      </Box>
    );
}

export default SearchView;
