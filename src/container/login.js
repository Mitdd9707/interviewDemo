import React from 'react';
import {View, StatusBar} from 'react-native';
import {Label, Input, Button, Header} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
const {style} = theme;

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Header title="React Native" styles={style.mbxxl} />
        <View style={[style.phxxl, style.flex]}>
          <Input label="Enter Email" icon="ios-mail" mandatory />
          <Input
            label="Enter Password"
            icon="md-key"
            mandatory
            secureTextEntry
          />
          <Button
            title="LOGIN"
            styles={style.mtl}
            onPress={() => navigation.navigate('tabNav')}
          />
        </View>
        <View style={[style.center, style.row, style.mvxxl]}>
          <Label style={style.black}>Yet not registered? </Label>
          <Button
            title="Sign Up"
            styles={[style.bgtransparent, style.po]}
            titleStyle={[style.primary]}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
