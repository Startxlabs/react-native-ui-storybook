import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import {windowHeight, windowWidth} from '../../utils/globalFunctions';
import {ImageModalI} from './CustomImageInterface';
import {styles} from './CustomImageStyles';

export const ImageModal = ({
  isModalVisible,
  width,
  height = 60,
  imageURL,
  onClose,
}: ImageModalI) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const imageHeight = height;

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
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={onClose}>
        <View style={styles.fullScreenImageWrapper}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <Icon name={'close'} size={25} color={'#fff'} />
          </TouchableOpacity>
          <View style={{width, height: `${height}%`}}>
            <PinchGestureHandler onGestureEvent={pinchHandler}>
              <Animated.Image
                source={{uri: imageURL}}
                style={[scaleStyle, {width: '100%', height: '100%'}]}
              />
            </PinchGestureHandler>
          </View>
        </View>
      </Modal>
    </View>
  );
};
