import React, {useState} from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Label, Input, Button, Header, Back} from '../component';
import {storeUserProfile} from '../action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import theme from '../helper/theme';
const {style} = theme;

const Signup = (props) => {
  const {navigation} = props;
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
  const onSubmitSignUp = async () => {
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
      const params = {
        name: state.name,
        email: state.email,
        password: state.password,
        discription: state.desc,
      };
      const response = await props.storeUserProfile(params);
      if (!response || response.error) {
        Alert.alert('Signup Failed.', response.error || 'Something went wrong');
      } else {
        navigation.replace('tabNav');
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
        <Back onPress={() => navigation.goBack()} />
        <View style={[style.phxxl, style.flex]}>
          <Input
            label="Enter Full Name"
            value={state.name}
            error={state.nameError}
            icon="md-person"
            onChangeText={(text) =>
              setState({...state, name: text, nameError: null})
            }
          />
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
          <Input
            label="Description"
            value={state.desc}
            error={state.descError}
            multilines={50}
            icon="md-person"
            onChangeText={(text) =>
              setState({...state, desc: text, descError: null})
            }
          />
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

const mapStatesToProps = ({user}) => ({user});
const mapDispatchToProps = {
  storeUserProfile,
};

export default connect(mapStatesToProps, mapDispatchToProps)(Signup);
