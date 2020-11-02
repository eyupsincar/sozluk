import * as React from 'react';
import { StatusBar, Animated, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';


import { Logo } from '../components/icons';
import Box from '../components/box';
import Search from '../components/search';
import Bg from '../components/bg';

import Text from '../components/text';
import {CardContainer,CardTitle,CardBody,CardSummary} from '../components/card';
import {SimpleCardContainer,SimpleCardTitle} from '../components/simple-card';

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
  {
    id: '59694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
  {
    id: '60694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
  {
    id: '61694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
  {
    id: '62694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
  {
    id: '63694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
  {
    id: '64694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'açıklama 1'
  },
];

const HERO_HEIGHT= 155;
const DURATİONS= 230;

function SearchView({navigation}) {
const [bgOpacity] = React.useState(new Animated.Value(1))
const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))
const [isSearchFocus, setSearchFocus] = React.useState(false)
const [homeData, setHomeData] = React.useState(null)

const getHomeData = async () => {
  const response = await fetch('https://sozluk.gov.tr/icerik')
  const data = await response.json()
  setHomeData(data)
}

React.useEffect(() => {
  getHomeData()
}, [])

React.useEffect(() => {
if(isSearchFocus) {
  //bg-opacity
  Animated.timing(bgOpacity, {
    useNativeDriver:false,
    toValue: 0,
    duration: DURATİONS
  }).start()
//hero-height
  Animated.timing(heroHeight, {
    useNativeDriver:false,
    toValue: 52 + 32,
    duration: DURATİONS
  }).start()

} else {
  //bg-opacity
  Animated.timing(bgOpacity, {
    useNativeDriver:false,
    toValue: 1,
    duration: DURATİONS
  }).start()
  //hero-height
  Animated.timing(heroHeight, {
    useNativeDriver:false,
    toValue: HERO_HEIGHT,
    duration: DURATİONS
  }).start()
}
}, [bgOpacity, heroHeight, isSearchFocus])




useFocusEffect(
  React.useCallback(() => {
    StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
    Platform.OS === 'android' && StatusBar.setBackgroundColor(isSearchFocus ? "#ecf0f1" : "#E11E3C");
  }, [isSearchFocus])
)

    return (

        <Box as={SafeAreaView} style={{flex: 1}}>
          <StatusBar />
{/* header bölümü*/}
          <Box
            as={Animated.View}
            position="relative"
            zIndex={1}
            height={heroHeight}>
    {/*logo bölümü*/}

            <Box mt={-120} as={Animated.View} style={{ opacity: bgOpacity }}>
              <Bg pt={120} pb={26}>
                <Box flex={1} alignItems="center" justifyContent="center">
                  <Logo width={120} color="white" />
                </Box>
              </Bg>
            </Box>
          {/* search bölümü*/}
          <Box position="absolute" left={0} bottom={isSearchFocus ? 0 : -42 } p={16} width="100%">
              <Search onChangeFocus={status => setSearchFocus(status)} />
              </Box>
          </Box>
  {/* content bölümü*/}

      <Box bg="softRed" pt={isSearchFocus ? 0 : 15}>
          {isSearchFocus ? (
            <Box>
            <FlatList
            style={{ padding: 16}}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Box py={4}>
              <SimpleCardContainer>
                <SimpleCardTitle>{item.title}</SimpleCardTitle>
              </SimpleCardContainer>
            </Box>
            )}
            ListHeaderComponent={<Text color="textLight" mb={10}>Son Aramalar</Text>}
              />
            </Box>

            ) : (

<Box px={18} py={20} style={{overflowY: "scroll"}}>

  <Box>
    <Text color="textLight">Bir Kelime</Text>

      <CardContainer
      mt={5}
      onPress={() =>
        navigation.navigate('Detail',
      {title:'On Para'
    })
  }>
        {homeData ? (
          <>
          <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
          <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
          </>
        ) : (
            <ActivityIndicator />
        )}
      </CardContainer>
  </Box>
  <Box mt={25}>
    <Text color="textLight">Bir deyim bir - Atasözü</Text>

      <CardContainer
      mt={5}
      onPress={() =>
         navigation.navigate('Detail',{ title:'Siyem Siyem Ağlamak'
       })
     }>
             {homeData ? (
               <>
               <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
               <CardSummary>{homeData?.atasoz[0].anlam}.</CardSummary>
               </>
             ) : (
                 <ActivityIndicator />
             )}
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
