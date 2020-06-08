import React, {useEffect} from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import theme from '../helper/theme';
const {style} = theme;

const Auth = (props) => {
  const {navigation} = props;
  useEffect(() => {
    const {user} = props.user;
    if (user && user.email) {
      navigation.replace('tabNav');
    }
    navigation.replace('Login');
  }, [props.user]);
  return <View style={style.container}></View>;
};

const mapStatesToProps = ({user}) => ({user});
const mapDispatchToProps = {};
export default connect(mapStatesToProps, mapDispatchToProps)(Auth);
