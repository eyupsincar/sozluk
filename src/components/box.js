import {View} from 'react-native';
import styled from 'styled-components'
import {compose,
   color,
    size,
     space,
      flexbox,
       borderRadius,
        border,
         background,
} from 'styled-system'

const Box = styled(View)(
    compose(
        color,
        flexbox,
        space,
        border,
        size,
        borderRadius,
        background,
    ),
);

export default Box;
