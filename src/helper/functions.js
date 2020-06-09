import React from 'react';
import {View, Dimensions} from 'react-native';
import {BottomTabBar} from 'react-navigation-tabs';
import theme from '../asset/theme';

const {style, colors} = theme;
const {width} = Dimensions.get('window');
const TabBarComponent = (props) => <BottomTabBar {...props} />;

export function CustomComponent(props, styles) {
  return (
    <View>
      <View style={styles}>
        <View
          style={{
            height: 2,
            width: width / 4,
            backgroundColor: colors.primary,
          }}
        />
      </View>
      <TabBarComponent
        {...props}
        allowFontScaling={false}
        labelStyle={{
          ...style.scriptsize,
          ...style.primary,
          ...style.pvs,
          ...style.myriadRegular,
        }}
        style={{
          height: 60,
          ...style.pts,
          ...style.bgwhite,
        }}
      />
    </View>
  );
}

export function validateEmailPass(params) {
  let emailError = null;
  let passwordError = null;
  if (!params.email) {
    emailError = 'Email is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(params.email)) {
    emailError = 'Invalid Email.';
  }
  if (!params.password) {
    passwordError = 'Password is required.';
  } else if (params.password.length < 6) {
    passwordError = 'Password must be at least 6 character long.';
  }
  return {emailError, passwordError};
}
