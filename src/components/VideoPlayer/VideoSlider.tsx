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
}: VideoSliderI) => {
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
        renderThumbComponent={() =>
          showControls ? (
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'white',
                borderRadius: 10,
              }}
            />
          ) : (
            <></>
          )
        }
        thumbTintColor={showControls ? '#fff' : 'transparent'}
        containerStyle={styles.sliderContainer}
        animationType={'timing'}
        minimumTrackTintColor={'red'}
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
});
