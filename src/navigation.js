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
import { Left,More } from './components/icons'

{/*import HistoryView from './views/history';*/}
import SearchView from './views/search';
{/*import FavoriteView from './views/favorite';*/}
import DetailView from './views/detail';
import Box from './components/box';
import Theme from './utils/theme';
import Button from './components/button';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
            name="Search"
            component={SearchView}
            options={() => {
              return {
                headerShow: false,
                 headerMode: "none",
                 header: () => {}
              }
            }}
            />
            <HomeStack.Screen
            name="Detail"
            component={DetailView}
            options={({ route, navigation }) => {
              return {
                title: route.params?.title,
                headerStyle: {
                  backgroundColor: Theme.colors.softRed,
                  shadowColor: 'transparent'
                },
                headerLeft: () => (
                  <Button
                      height="100%"
                      px={5}
                      onPress={() => navigation.navigate('Search')}>
                    <Left color={Theme.colors.textDark} />
                  </Button>
                ),
                headerRight: () => (
                  <Button
                      height="100%"
                      px={11}
                      onPress={() => navigation.navigate('')}>
                    <More color={Theme.colors.textDark} />
                  </Button>
                )
              }
            }}
            />
        </HomeStack.Navigator>
    );
}

function TabNavigator() {
    return (

          <NavigationContainer>
              <Tab.Navigator initialRouteName="Search" tabBar={props => <TabBar {...props} />}>
                {/*  <Tab.Screen name="History" component={HistoryView}/>*/}
                  <Tab.Screen name="Search" component={SearchStack}/>
                {/*<Tab.Screen name="Favorite" component={FavoriteView}/>*/}
              </Tab.Navigator>
          </NavigationContainer>

    );

}

export default TabNavigator;
