import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import theme from '../asset/theme';
import Label from './label';
import {images} from '../asset';
const {colors, style} = theme;

/**
 * Header
 */
export default function Header(props) {
  const {title, styles} = props;
  return (
    <View style={[style.pvxxl, style.center, style.bgsilver, styles]}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={{width: 150, height: 150, tintColor: colors.primary}}
      />
      <Label style={[style.big, style.black]}>{title}</Label>
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  styles: PropTypes.any,
};
