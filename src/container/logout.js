import React from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Header, Button} from '../component';
import {logout} from '../action';
import theme from '../helper/theme';
const {style} = theme;

const Logout = (props) => {
  const {navigation} = props;
  const onLogoutPressed = async () => {
    const response = await props.logout();
    if (!response || response.error) {
      Alert.alert('Logout Failed.', response.error || 'Something went wrong');
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
        <Header title="Logout" styles={style.mbxxl} />
        <View style={[style.phxxl, style.flex]}>
          <Button title="LOGOUT" styles={style.mtl} onPress={onLogoutPressed} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStatesToProps = ({user}) => ({user});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStatesToProps, mapDispatchToProps)(Logout);
