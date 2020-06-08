import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {Label, Input, Button, Header, Back} from '../component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
const {style} = theme;

const Signup = ({navigation}) => {
  const [state, setState] = useState({
    name: null,
    nameError: null,
    email: null,
    emailError: null,
    password: null,
    passwordError: null,
    desc: null,
    descError: null,
  });
  const onSubmitSignUp = () => {
    let emailError = null;
    let passwordError = null;
    if (!state.email) {
      emailError = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.email)) {
      emailError = 'Invalid Email.';
    }
    if (!state.password) {
      passwordError = 'Password is required.';
    } else if (state.password.length < 6) {
      passwordError = 'Password must be at least 6 character long.';
    }
    setState({...state, emailError, passwordError});
    if (!emailError && !passwordError) {
      navigation.navigate('tabNav');
    }
  };
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
          <Button title="SIGNUP" styles={style.mtl} onPress={onSubmitSignUp} />
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
