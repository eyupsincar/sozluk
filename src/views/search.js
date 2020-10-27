import * as React from 'react';
import {Button, ImageBackground, StatusBar, Animated, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';
import { Logo } from '../components/icons';
import Box from '../components/box';
import Search from '../components/search';
import bg from '../assets/bg.jpg';

function SearchView() {
const [isSearchFocus, setSearchFocus] = React.useState(false)
const [heroHeight] = React.useState(new Animated.Value(150))


React.useEffect(() => {
if(isSearchFocus) {
  Animated.timing(heroHeight, {
    useNativeDriver:false,
    toValue: 45 + 25,
    duration: 230
  }).start()
} else {
  Animated.timing(heroHeight, {
    useNativeDriver:false,
    toValue: 190,
    duration: 230
  }).start()
}
}, [heroHeight, isSearchFocus])




useFocusEffect(
  React.useCallback(() => {
    StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
    Platform.OS === 'android' && StatusBar.setBackgroundColor(isSearchFocus ? "#ecf0f1" : "#E11E3C");
  }, [isSearchFocus])
)

    return (
        <Box as={SafeAreaView}>
          <StatusBar />
{/* header bölümü*/}
          <Box
            as={Animated.View}
            position="relative"
            zIndex={1}
            height={heroHeight} >

            {!isSearchFocus && (
              <Box
                as={ImageBackground}
                source={bg}
                style={{width:"100%", height:"100%"}}>

        {/*logo bölümü*/}
                <Box flex={1} alignItems="center" justifyContent="center">
                  <Logo width={120} color="white" />
                </Box>
              </Box>
            )}


          {/* search bölümü*/}
          <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42 } p={16} width="100%">
            <Search onChangeFocus={status => setSearchFocus(status)} />
          </Box>

          </Box>
  {/* content bölümü*/}

          <Box pt={isSearchFocus ? 0 : 35}>
          {isSearchFocus ? (
            <Box bg="white" >
              <Text>History</Text>
            </Box>
          ) : (
            <Box bg="white" >
              <Text>Öneriler</Text>
            </Box>
          )}
          </Box>
        </Box>
    );
}

export default SearchView;
