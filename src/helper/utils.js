import {Dimensions, Platform, StatusBar} from 'react-native';
const {height, width} = Dimensions.get('window');

const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812)
  );
};

const statusBarHeight =
  Platform.OS == 'android' ? StatusBar.currentHeight : isIphoneX() ? 30 : 20;

const SCREEN_HEIGHT = height - (Platform.OS == 'ios' ? 0 : statusBarHeight);
const SCREEN_WIDTH = width;

const statusBarPaddingHeight = Platform.OS == 'ios' ? statusBarHeight : 0;

export default {
  statusBarHeight,
  statusBarPaddingHeight,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  isIphoneX: isIphoneX(),
};
