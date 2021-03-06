import React from 'react';
import {Image, View, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Auth from './container/auth';
import Login from './container/login';
import Signup from './container/signup';
import Dashboard from './container/dashboard';
import Profile from './container/profile';
import Logout from './container/logout';
import Setting from './container/setting';
import theme from './asset/theme';
import {CustomComponent} from './helper/functions';

const {style, colors} = theme;
const {width} = Dimensions.get('window');

const tabNav = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarComponent: (props) => CustomComponent(props, {paddingLeft: 0}),
        tabBarIcon: (
          <View style={style.flex}>
            <Icon name={'md-pie'} size={30} color={colors.primary} />
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarComponent: (props) =>
          CustomComponent(props, {paddingLeft: width / 4}),
        tabBarIcon: (
          <View style={style.flex}>
            <Icon name={'md-person'} size={30} color={colors.primary} />
          </View>
        ),
      },
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarComponent: (props) =>
          CustomComponent(props, {paddingLeft: (width / 4) * 2}),
        tabBarIcon: (
          <View style={style.flex}>
            <Icon name={'md-settings'} size={30} color={colors.primary} />
          </View>
        ),
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        tabBarComponent: (props) =>
          CustomComponent(props, {paddingLeft: (width / 4) * 3}),
        tabBarIcon: (
          <View style={style.flex}>
            <Icon name={'md-log-out'} size={30} color={colors.primary} />
          </View>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      allowFontScaling: false,
      activeTintColor: 'red',
      labelStyle: {
        ...style.xxxs,
        ...style.primary,
        ...style.pvs,
      },
      style: {
        height: 60,
        ...style.pts,
        ...style.bgwhite,
      },
    },
  },
);

const Router = createStackNavigator(
  {
    Auth,
    Login,
    Signup,
    tabNav,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(Router);
