import React from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {VideoSliderI} from './VideoPlayerInterface';

const VideoSlider = ({
  showControls,
  value = 0,
  min = 0,
  max,
  onValuesChangeStart,
  onValuesChangeFinish,
  disabled,
}: VideoSliderI) => {
  return (
    <View>
      <Slider
        value={value}
        minimumValue={min}
        maximumValue={max}
        onSlidingStart={onValuesChangeStart}
        onSlidingComplete={onValuesChangeFinish}
        disabled={disabled}
        style={styles.sliderContainer}
        thumbTintColor={showControls ? '#fff' : 'transparent'}
        minimumTrackTintColor={
          value && value > 0 ? 'red' : 'rgba(255, 255, 255, 0.7)'
        }
        maximumTrackTintColor={
          value && value >= max ? 'red' : 'rgba(255, 255, 255, 0.7)'
        }
      />
    </View>
  );
};

export default VideoSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 25,
  },
  selectedStyle: {
    backgroundColor: 'red',
  },
  trackStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
