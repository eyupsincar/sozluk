import React from 'react';
import { Keyboard } from 'react-native';

import Box from './box';
import Text from './text';
import Button from './button';
import Input from './input';
import { Search, Close } from './icons';

import Theme from '../utils/theme';


function SearchBox ({onChangeFocus}) {

  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() =>{
      // Keyboard.addListener('keyboardWillShow', keyboardDidShow);
      // Keyboard.addListener('keyboardWillHide', keyboardDidHide);
      // return function () {
      // Keyboard.removeListener('keyboardWillShow', keyboardDidShow);
      // Keyboard.removeListener('keyboardWillHide', keyboardDidHide);
      //   }

    onChangeFocus(isFocus)
  }, [isFocus, onChangeFocus])

  const keyboardDidShow = () => {
    onChangeFocus(true)
  }
  const keyboardDidHide = () => {
    onChangeFocus(false)
  }

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }
  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style= {{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            }
          }}

        borderWidth={1}
        borderColor={isFocus ? "#D1D1D1" : "transparent"}
        bg="white"
        height={52}
        borderRadius="normal"
        color="textDark"
        pl={52}
        placeholder="Türkçe Sözlük'te Ara"
        placeholderTextColor="textMedium"
        value={value}
        onFocus={() => setFocus(true)}
        onChangeText={text => setValue(text)}
      />
      { value.length > 0 && (
        <Button onPress={onClear} position="absolute" right={16} top={14}>
        <Close color={Theme.colors.textDark}/>
      </Button>
      )}
      <Button position="absolute" left={16} top={14}>
        <Search color={Theme.colors.textMedium}/>
      </Button>
    </Box>
          { isFocus && (
            <Button onPress={onCancel} px={5} height={52}>
              <Text>Vazgeç</Text>
            </Button>
          )}
     </Box>
  )
}

export default SearchBox;
