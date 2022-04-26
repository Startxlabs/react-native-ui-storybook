import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {VideoSliderI} from './VideoPlayerInterface';

const VideoSlider = ({
  showControls,
  value = 0,
  min = 0,
  max,
  sliderLength,
  onValuesChangeStart,
  onValuesChangeFinish,
  enableOne,
}: VideoSliderI) => {
  const [width, setWidth] = useState(sliderLength);

  return (
    <View
      onLayout={e => {
        setWidth(e.nativeEvent.layout.width);
      }}
      style={{width}}>
      <MultiSlider
        values={[value]}
        sliderLength={width}
        min={min}
        max={max}
        onValuesChangeStart={onValuesChangeStart}
        onValuesChangeFinish={onValuesChangeFinish}
        selectedStyle={styles.selectedStyle}
        trackStyle={styles.trackStyle}
        markerStyle={{
          width: 20,
          height: 20,
          display: showControls ? 'flex' : 'none',
        }}
        containerStyle={styles.sliderContainer}
        enabledOne={enableOne}
      />
    </View>
  );
};

export default VideoSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    bottom: -9,
    height: 20,
  },
  selectedStyle: {
    backgroundColor: 'red',
  },
  trackStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
