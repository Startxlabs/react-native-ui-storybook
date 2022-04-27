import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {VideoPlayer} from '../../../components/VideoPlayer';

storiesOf('VideoPlayer', module).add('Default', () => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer
        videoSource={
          // 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        }
        videoPlayerContainerStyles={{
          height: 250,
        }}
      />
    </View>
  );
});
