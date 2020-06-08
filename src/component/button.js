import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Label from './label';
import theme from '../asset/theme';

const {style} = theme;

/**
 * Button component
 */
export default function Button(props) {
  /**
   * Render method
   *
   * @return {Component}
   */
  const {styles, titleStyle, transparent, title, loader} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        style.pxl,
        style.brm,
        style.center,
        style.row,
        style.bgprimary,
        styles,
      ]}
      {...props}>
      {loader ? <ActivityIndicator color="white" style={style.mrs} /> : null}
      <Label style={[style.textCenter, style.xxs, style.white, titleStyle]}>
        {title}
      </Label>
    </TouchableOpacity>
  );
}
Button.propTypes = {
  styles: PropTypes.any,
  titleStyle: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.func,
  loader: PropTypes.bool,
};
