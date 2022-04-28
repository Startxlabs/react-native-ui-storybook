import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {VideoPlayer} from '../../../components/VideoPlayer';
import Icon from 'react-native-vector-icons/Ionicons';

storiesOf('VideoPlayer', module)
  .add('Default', () => {
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          videoSource={
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
          }
          videoPlayerContainerStyles={{
            height: 250,
          }}
        />
      </View>
    );
  })
  .add('Custom', () => {
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          videoSource={
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
          }
          videoPlayerContainerStyles={{
            height: 250,
          }}
          controlIcons={{
            playIcon: () => (
              <Icon name={'play-circle-outline'} size={50} color={'#fff'} />
            ),
            pauseIcon: () => (
              <Icon name={'pause-circle-outline'} size={50} color={'#fff'} />
            ),
            backwardIcon: () => (
              <Icon name={'play-back-outline'} size={30} color={'#fff'} />
            ),
            forwardIcon: () => (
              <Icon name={'play-forward-outline'} size={30} color={'#fff'} />
            ),
          }}
        />
      </View>
    );
  });
