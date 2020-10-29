import * as React from 'react';
import { StatusBar, Animated, FlatList} from 'react-native';
import {SafeAreaView, ScrollView} from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';


import { Logo } from '../components/icons';
import Box from '../components/box';
import Search from '../components/search';
import Bg from '../components/bg';

import Text from '../components/text';
import {CardContainer,CardTitle,CardBody,CardSummary} from '../components/card';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    summary: 'açıklama 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'açıklama 1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
];


function SearchView({navigation}) {
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
        <Box as={SafeAreaView, ScrollView}>
          <StatusBar />
{/* header bölümü*/}
          <Box
            as={Animated.View}
            position="relative"
            zIndex={1}
            height={heroHeight} >
    {/*logo bölümü*/}
            {!isSearchFocus && (
              <Bg>
                <Box flex={1} alignItems="center" justifyContent="center">
                  <Logo width={120} color="white" />
                </Box>
              </Bg>
            )}
          {/* search bölümü*/}
          <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42 } p={16} width="100%">
              <Search onChangeFocus={status => setSearchFocus(status)} />
              </Box>
          </Box>
  {/* content bölümü*/}

      <Box pt={isSearchFocus ? 0 : 15}>
          {isSearchFocus ? (
            <Box bg="softRed" >
              <Text>History</Text>
            </Box>
            ) : (

            <Box px={18} py={20}>
            <Box>
              <Text color="textLight">Bir Deyim</Text>

                <CardContainer mt={5} onPress={() => navigation.navigate("Detail")}>
                  <CardTitle>on para</CardTitle>
                  <CardSummary>çok az (para).</CardSummary>
                </CardContainer>
            </Box>
            <Box mt={25}>
              <Text color="textLight">Bir deyim bir - Atasözü</Text>

                <CardContainer mt={5} onPress={() => navigation.navigate('Detail')}>
                  <CardTitle>siyem siyem ağlamak</CardTitle>
                  <CardSummary>hafif hafif, ince ince, durmadan gözyaşı dökmek.</CardSummary>
                </CardContainer>
              </Box>
          </Box>
          )}
          </Box>
        </Box>
    );
}

export default SearchView;



// <FlatList
//    data={DATA}
//    renderItem={({item}) => (
//      <Box py={5}>
//      <CardContainer>
//        <CardTitle>{item.title}</CardTitle>
//        <CardSummary>{item.summary}</CardSummary>
//      </CardContainer>
//      </Box>
//    )}
//    keyExtractor={item => item.id}
//  />
