import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Label, Input, Button, Header, Back} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {images} from '../asset';
const {style, colors} = theme;

const Signup = ({navigation}) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Header title="React Native" styles={style.mbxxl} />
        <Back onPress={() => navigation.goBack()} />
        <View style={[style.phxxl, style.flex]}>
          <Input label="Enter Full Name" icon="md-person" />
          <Input label="Enter Email" icon="ios-mail" mandatory />
          <Input
            label="Enter Password"
            icon="md-key"
            mandatory
            secureTextEntry
          />
          <Input label="Description" multilines={70} icon="md-person" />
          <Button
            title="SIGNUP"
            styles={style.mtl}
            onPress={() => navigation.navigate('tabNav')}
          />
        </View>
        <View style={[style.center, style.row, style.mvxxl]}>
          <Label style={style.black}>Already have an account? </Label>
          <Button
            title="Login"
            styles={[style.bgtransparent, style.po]}
            titleStyle={[style.primary]}
            onPress={() => navigation.goBack()}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Signup;
