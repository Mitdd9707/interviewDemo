import {StyleSheet, Platform, Dimensions} from 'react-native';
import _ from 'lodash';
import utils from '../helper/utils';

const {height, width} = Dimensions.get('window');

const fontSizes = {
  xxxs: 12,
  xxs: 14,
  xs: 16,
  s: 18,
  m: 20,
  l: 22,
  xl: 24,
  xxl: 30,
  xxxl: 36,
  big: 42,
};

const colors = {
  primary: '#0e637b',
  primarylight: '#86b1bd',
  light: '#29a8cc',
  secondary: '#8a8a8a',
  danger: '#ed1c24',
  black: 'black',
  white: 'white',
  silver: '#a9a9a9',
  green: '#008000',
  link: '#0645ad',
  silverlight: '#e6e7e9',
  transparent: 'transparent',
};

const fontFamilies = {
  myriadSemi: 'MyriadPro-Semibold',
  myriadRegular: 'MyriadPro-Regular',
  myriadBold: 'MyriadPro-Bold',
};

const spaces = {
  o: 0,
  vs: 3,
  s: 5,
  m: 10,
  l: 15,
  xl: 20,
  xxl: 30,
  xxxl: 40,
  big: 50,
};
const border = {border: 2, borderColor: 'white'};
const style = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerNoBg: {
    flex: 1,
  },
  containerX: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: utils.statusBarHeight,
  },
  flex: {
    flex: 1,
  },
  padContainer: {
    paddingHorizontal: 30,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  shadow:
    Platform.OS == 'ios'
      ? {
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 2,
          shadowOpacity: 0.3,
          backgroundColor: 'white',
        }
      : {elevation: 2},
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  paddingTopX: {
    paddingTop: utils.statusBarPaddingHeight,
  },
};

_.forIn(
  fontSizes,
  (value, key) => (style[key] = {fontSize: value, lineHeight: value + 4}),
);
_.forIn(colors, (value, key) => (style[key] = {color: value}));
_.forIn(fontFamilies, (value, key) => (style[key] = {fontFamily: value}));
_.forIn(spaces, (value, key) => (style[`m${key}`] = {margin: value}));
_.forIn(spaces, (value, key) => (style[`mb${key}`] = {marginBottom: value}));
_.forIn(spaces, (value, key) => (style[`ml${key}`] = {marginLeft: value}));
_.forIn(spaces, (value, key) => (style[`mr${key}`] = {marginRight: value}));
_.forIn(spaces, (value, key) => (style[`mt${key}`] = {marginTop: value}));
_.forIn(spaces, (value, key) => (style[`mv${key}`] = {marginVertical: value}));
_.forIn(
  spaces,
  (value, key) => (style[`mh${key}`] = {marginHorizontal: value}),
);
_.forIn(spaces, (value, key) => (style[`p${key}`] = {padding: value}));
_.forIn(spaces, (value, key) => (style[`pb${key}`] = {paddingBottom: value}));
_.forIn(spaces, (value, key) => (style[`pl${key}`] = {paddingLeft: value}));
_.forIn(spaces, (value, key) => (style[`pr${key}`] = {paddingRight: value}));
_.forIn(spaces, (value, key) => (style[`pt${key}`] = {paddingTop: value}));
_.forIn(spaces, (value, key) => (style[`pv${key}`] = {paddingVertical: value}));
_.forIn(
  spaces,
  (value, key) => (style[`ph${key}`] = {paddingHorizontal: value}),
);
_.forIn(spaces, (value, key) => (style[`br${key}`] = {borderRadius: value}));

_.forIn(colors, (value, key) => (style[`bg${key}`] = {backgroundColor: value}));

export default {
  fontSizes,
  colors,
  style,
  fontFamilies,
  border,
  screen: {height, width},
};
