import * as React from 'react';

import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';

import Box from '../components/box';
import Text from '../components/text';
import LoaderText from '../components/LoaderText';
import {Favorite,Sound,Hand,FavoriteSolid,SoundSolid,HandSolid} from '../components/icons';

import ActionButton, {ActionButtonTitle} from '../components/action-button';

import DetailSummaryItem from '../components/detail-summary-item';

import Theme from '../utils/theme';


function DetailView({route}) {
//const keyword = "çay"
const keyword = route.params?.keyword


  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#F8F8F8');
    }, [])
  )


  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    console.log(data)
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

    return (
      <Box as={SafeAreaView,ScrollView} bg="softRed" flex={1}>

        <Box p={16}>
      {/* başlık ve alt yazı kısmı*/}
          <Box>
            <Text fontSize={28} fontWeight="bold">
              {keyword}
            </Text>
            {(data?.telaffuz || data?.lisan) ? (
              <Text color="textLight" mt={5}>
                  {data?.telaffuz && data?.telaffuz} {data?.lisan}
              </Text>
            ) : null }
          </Box>

          <Box flexDirection="row" mt={15}>
          {/* ilk icon*/}
              <ActionButton disabled={!data}>
                <Sound width={24} height={24} color={Theme.colors.textLight}/>
              </ActionButton>

          {/* ikinci icon*/}
              <ActionButton disabled={!data} ml={12}>
                <Favorite width={24} height={24} color={Theme.colors.textLight}/>
              </ActionButton>

          {/* üçüncü yazılı icon*/}
              <ActionButton disabled={!data} ml="auto">
                <Hand width={24} height={24} color={Theme.colors.textLight}/>
                <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
              </ActionButton>
          </Box>

          <Box mt={25}>
          {data ? (
            data.anlamlarListe.map(item =>(
            <DetailSummaryItem
              key={item.anlam_sira}
              data={item}
              border={item.anlam_sira != "1"}
            />
          ))
          ) : (
            [1, 2, 3].map(index => (
              <DetailSummaryItem key={index} border={index != 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
              </DetailSummaryItem>
            ))
          )}
          </Box>
        </Box>
      </Box>
    );
}

export default DetailView;
