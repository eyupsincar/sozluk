import * as React from 'react';

import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../components/box';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';


function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
    }, [])
  )


    return (
      <Box as={SafeAreaView} flex={1}>
          <Text>
              Detay
          </Text>
      </Box>
    );
}

export default DetailView;
