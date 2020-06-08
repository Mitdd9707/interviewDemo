import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../helper/theme';
import Label from './label';
const {colors, style} = theme;

/**
 * Back
 */
export default function Back(props) {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.backIcon} onPress={onPress}>
      <Icon name={'ios-arrow-back'} size={30} color={colors.primary} />
      <Label style={[style.black, style.s]}> Back</Label>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  backIcon: {
    ...style.pxl,
    ...style.row,
    ...style.center,
    ...style.bgsilver,
    position: 'absolute',
  },
});

Back.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.any,
};
