import * as React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Container,
} from 'react-native';


import TabBar from './components/tab-bar';
import HistoryView from './views/history';
import SearchView from './views/search';
import FavoriteView from './views/favorite';
import DetailView from './views/detail';
import Box from './components/box';
import Theme from './utils/theme';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function SearchStack() {
    return (
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Search" component={SearchView}/>
            <HomeStack.Screen name="Detail" component={DetailView}/>
        </HomeStack.Navigator>
    );
}

export default function App() {
    return (
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
              <Tab.Navigator initialRouteName="Search" tabBar={props => <TabBar {...props} />}>
                  <Tab.Screen name="History" component={HistoryView}/>
                  <Tab.Screen name="Search" component={SearchStack}/>
                  <Tab.Screen name="Favorite" component={FavoriteView}/>
              </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
    );

}
