import React from 'react';
import { Animated } from 'react-native';
import Box from './box';
import Bg from './bg';
import { Logo } from './icons';
import Search from './search';

const HERO_HEIGHT= 155;
const DURATİONS= 230;

function HomeSearch ({isSearchFocus,onSearchFocus}) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))

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
  }}, [bgOpacity, heroHeight, isSearchFocus])

  return (
    <Box
      as={Animated.View}
      position="relative"
      zIndex={666}
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
      <Search onChangeFocus={status => onSearchFocus(status)} />
    </Box>
    </Box>

  );
}

export default HomeSearch;
