import React from 'react';
import {View, StatusBar, Image} from 'react-native';
import {Label, Input, Button} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
import {images} from '../asset';
const {style, colors} = theme;

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <View style={[style.pvxxl, style.mbxxl, style.center, style.bgsilver]}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{width: 150, height: 150, tintColor: colors.primary}}
          />
          <Label style={[style.big, style.black]}>React Native</Label>
        </View>
        <View style={[style.phxxl, style.flex]}>
          <Input label="Enter Email" icon="ios-mail" mandatory />
          <Input
            label="Enter Password"
            icon="md-key"
            mandatory
            secureTextEntry
          />
          <Button title="LOGIN" styles={style.mtl} />
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
