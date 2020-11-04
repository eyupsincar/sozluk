import * as React from 'react';
import { StatusBar, ScrollView,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';


import Box from '../components/box';
import HomeSearch from '../components/home-search';

import SuggestionCard from '../components/suggestion-card';
import SearchHistoryList from '../components/search-history-list';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    summary: 'açıklama 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'açıklama 2'
  },
];

function SearchView({navigation}) {

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

useFocusEffect(
  React.useCallback(() => {
    StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
    Platform.OS === 'android' && StatusBar.setBackgroundColor(isSearchFocus ? "#ecf0f1" : "#E11E3C");
  }, [isSearchFocus])
)

    return (

      <Box as={SafeAreaView,ScrollView} style={{flex: 1}}>
          <StatusBar />
    {/* header bölümü*/}
          <HomeSearch
            isSearchFocus={isSearchFocus} onSearchFocus={setSearchFocus}
          />
    {/* content bölümü*/}

      <Box bg="softRed" pt={isSearchFocus ? 0 : 15}>
          {isSearchFocus ? (
              <Box>
                  <SearchHistoryList data={DATA} />
              </Box>

            ) : (

      <Box px={18} py={20}>

        <SuggestionCard
          data={homeData?.kelime[0]}
          title="Bir Kelime"
          onPress={() =>
             navigation.navigate('Detail',{ keyword: homeData?.kelime[0].madde})
           }
        />

        <SuggestionCard
          mt={25}
          data={homeData?.atasoz[0]}
          title="Bir Deyim - Atasözü"
          onPress={() =>
             navigation.navigate('Detail',{ keyword: homeData?.atasoz[0].madde})
           }
        />
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
