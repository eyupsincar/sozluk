import {Button} from 'react-native';
import * as React from 'react';

import Box from '../components/box';
import Search from '../components/search';

function SearchView({navigation}) {
    return (
        <Box>
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
