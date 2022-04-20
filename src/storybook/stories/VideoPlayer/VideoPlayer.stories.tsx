import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {VideoPlayer} from '../../../components/VideoPlayer';

storiesOf('VideoPlayer', module).add('Default', () => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer />
    </View>
  );
});
