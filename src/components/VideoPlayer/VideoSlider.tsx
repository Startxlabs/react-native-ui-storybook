import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {VideoSliderI} from './VideoPlayerInterface';

const VideoSlider = ({
  showControls,
  value = 0,
  min = 0,
  max,
  onValuesChangeStart,
  onValuesChangeFinish,
  disabled,
  isBigThumb,
  customThumbComponent,
  customTrackStyle = {
    trackStyle: {height: 2, borderRadius: 0},
    minimumTrackTintColor: 'red',
    maximumTrackTintColor: 'rgba(255, 255, 255, 0.7)',
  },
}: VideoSliderI) => {
  // * custom thumb component
  const getThumbComponent = () => {
    return showControls ? (
      customThumbComponent ? (
        customThumbComponent(isBigThumb)
      ) : (
        <View
          style={{
            width: isBigThumb ? 20 : 14,
            height: isBigThumb ? 20 : 14,
            backgroundColor: 'red',
            borderRadius: 30,
          }}
        />
      )
    ) : (
      <></>
    );
  };

  // * custom minimum track color
  const getMinimumTrackTintColor = () => {
    return customTrackStyle.minimumTrackTintColor;
  };

  // * custom maximum track color
  const getMaximumTrackTintColor = () => {
    if (value && value >= max) {
      return customTrackStyle?.maximumTrackTintColor;
    }
  };

  return (
    <View>
      <Slider
        step={1}
        value={value}
        minimumValue={min}
        maximumValue={max}
        onSlidingStart={onValuesChangeStart}
        onSlidingComplete={onValuesChangeFinish}
        disabled={disabled}
        renderThumbComponent={getThumbComponent}
        thumbTintColor={showControls ? '#fff' : 'transparent'}
        containerStyle={styles.sliderContainer}
        animationType={'timing'}
        minimumTrackTintColor={getMinimumTrackTintColor()}
        maximumTrackTintColor={getMaximumTrackTintColor()}
        trackStyle={customTrackStyle?.trackStyle}
      />
    </View>
  );
};

export default VideoSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 25,
  },
});
