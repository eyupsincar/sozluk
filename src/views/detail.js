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
import {Favorite,Sound,Hand,FavoriteSolid,SoundSolid,HandSolid} from '../components/icons';

import ActionButton, {ActionButtonTitle} from '../components/action-button';

import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemSummary
} from '../components/detail-summary-item';

import Theme from '../utils/theme';


function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#F8F8F8');
    }, [])
  )


    return (
      <Box as={SafeAreaView} bg="softRed" flex={1}>

        <Box as={ScrollView} p={16}>
      {/* başlık ve alt yazı kısmı*/}
          <Box>
            <Text fontSize={28} fontWeight="bold">Detay</Text>
            <Text color="textLight" mt={5}>Arapça kalem</Text>
          </Box>


          <Box flexDirection="row" mt={15}>
          {/* ilk icon*/}

              <ActionButton>
                <SoundSolid width={24} height={24} color={Theme.colors.red}/>
              </ActionButton>

          {/* ikinci icon*/}
              <ActionButton ml={12}>
                <Favorite width={24} height={24} color={Theme.colors.textLight}/>
              </ActionButton>

          {/* üçüncü yazılı icon*/}
              <ActionButton ml="auto">
                <Hand width={24} height={24} color={Theme.colors.textLight}/>
                <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
              </ActionButton>
          </Box>

          <Box mt={25}>
            <DetailSummaryItemContainer>
              {/*  1. başlık bölümüm */}
                <DetailSummaryItemTitle>
                  Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                </DetailSummaryItemTitle>

              {/* 1. açıklama bölümüm */}
                <DetailSummaryItemSummary>
                  "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir."-Falih Rıfkı Atay
                </DetailSummaryItemSummary>
            </DetailSummaryItemContainer>

            <DetailSummaryItemContainer border>
                {/* 2. başlık bölümüm */}
                  <DetailSummaryItemTitle>
                    Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                  </DetailSummaryItemTitle>

                {/* 2. açıklama bölümüm */}
                  <DetailSummaryItemSummary>
                    "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir."-Falih Rıfkı Atay
                  </DetailSummaryItemSummary>
            </DetailSummaryItemContainer>

            <DetailSummaryItemContainer border>
                {/* 3. başlık bölümüm */}
                  <DetailSummaryItemTitle>
                    Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                  </DetailSummaryItemTitle>

                {/* 3. açıklama bölümüm */}
                  <DetailSummaryItemSummary>
                    "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir."-Falih Rıfkı Atay
                  </DetailSummaryItemSummary>
            </DetailSummaryItemContainer>

          </Box>

          </Box>
      </Box>
    );
}

export default DetailView;
