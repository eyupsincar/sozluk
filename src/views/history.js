import * as React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function HistoryView() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                AnaSayfa!
            </Text>
        </View>
    );
}

export default HistoryView;
