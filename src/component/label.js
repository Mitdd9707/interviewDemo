import React from 'react';
import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';
import theme from '../helper/theme';
const {colors} = theme;

/**
 * Label
 */
export default function Label(props) {
  const {children} = props;
  return (
    <RNText style={{color: colors.primary}} allowFontScaling={false} {...props}>
      {children}
    </RNText>
  );
}

Label.propTypes = {
  style: PropTypes.any,
  children: PropTypes.any,
};
