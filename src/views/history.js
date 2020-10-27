import * as React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import Box from '../components/box';
import SafeAreaView from 'react-native-safe-area-view';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { useFocusEffect } from '@react-navigation/native';
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
    }, [])
  )


    return (

        <Box as={SafeAreaView} flex={1}>
            <Text>
                AnaSayfa!
            </Text>
        </Box>

    );
}

export default HistoryView;
