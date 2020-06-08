import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {Header} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
const {style} = theme;

const Setting = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Header title="Setting" styles={style.mbxxl} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Setting;
