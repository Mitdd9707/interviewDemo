import React, {useState} from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Label, Input, Button, Header} from '../component';
import {storeUserProfile} from '../action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../asset/theme';
import {validateEmailPass} from '../helper/functions';
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
    const params = {email: state.email, password: state.password};
    const validation = validateEmailPass(params);
    if (validation.emailError || validation.passwordError) {
      setState({
        ...state,
        emailError: validation.emailError,
        passwordError: validation.passwordError,
      });
      return;
    }
    const response = await props.storeUserProfile(params);
    if (!response || response.error) {
      Alert.alert('Login Failed.', response.error || 'Something went wrong');
    } else {
      navigation.replace('Auth');
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
