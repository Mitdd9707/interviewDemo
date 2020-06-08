import React, {useState} from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Label, Input, Button, Header} from '../component';
import {storeUserProfile} from '../action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
const {style} = theme;

const Login = (props) => {
  const {navigation} = props;
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    emailError: null,
    password: 'cityslicka',
    passwordError: null,
  });
  const onSubmitLogin = async () => {
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
      const params = {email: state.email, password: state.password};
      const response = await props.storeUserProfile(params);
      if (!response || response.error) {
        Alert.alert('Login Failed.', response.error || 'Something went wrong');
      } else {
        navigation.replace('Auth');
      }
    }
  };
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Header title="React Native" styles={style.mbxxl} />
        <View style={[style.phxxl, style.flex]}>
          <Input
            label="Enter Email"
            value={state.email}
            error={state.emailError}
            icon="ios-mail"
            onChangeText={(text) =>
              setState({...state, email: text, emailError: null})
            }
            mandatory
          />
          <Input
            label="Enter Password"
            value={state.password}
            error={state.passwordError}
            icon="md-key"
            mandatory
            secureTextEntry
            onChangeText={(text) =>
              setState({...state, password: text, passwordError: null})
            }
          />
          <Button title="LOGIN" styles={style.mtl} onPress={onSubmitLogin} />
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

const mapStatesToProps = ({user}) => ({user});
const mapDispatchToProps = {
  storeUserProfile,
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
