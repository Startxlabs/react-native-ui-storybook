import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CustomImageI} from '../../interfaces/CustomImageInterface';
import {windowHeight, windowWidth} from '../../utils/globalFunctions';
import {styles} from './CustomImageStyles';

export const CustomImage = ({heightPercent = 35, imageURL}: CustomImageI) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const imageHeight = isFullScreen ? 100 : heightPercent;

  const handleToggleFullScreen = () => {
    if (isFullScreen) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  };

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -windowWidth / 2},
        {translateY: -(windowHeight * ((imageHeight * 1) / 100)) / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: windowWidth / 2},
        {translateY: (windowHeight * ((imageHeight * 1) / 100)) / 2},
      ],
    };
  });

  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.99}
        style={[
          isFullScreen
            ? styles.fullScreenStyle
            : {width: '100%', height: `${imageHeight}%`},
        ]}
        onPress={handleToggleFullScreen}>
        <View>
          <PinchGestureHandler onGestureEvent={pinchHandler}>
            <Animated.Image
              source={{uri: imageURL}}
              style={[scaleStyle, {width: '100%', height: '100%'}]}
            />
          </PinchGestureHandler>
        </View>
      </TouchableOpacity>
    </View>
  );
};
