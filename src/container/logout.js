import React from 'react';
import {View, StatusBar} from 'react-native';
import {Header, Button} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
const {style} = theme;

const Logout = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Header title="Logout" styles={style.mbxxl} />
        <View style={[style.phxxl, style.flex]}>
          <Button
            title="LOGOUT"
            styles={style.mtl}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Logout;
