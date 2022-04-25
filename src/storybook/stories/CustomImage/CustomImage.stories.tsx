import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {CustomImage} from '../../../components/CustomImage';

storiesOf('Image', module).add('Default', () => {
  return (
    <View style={{flex: 1}}>
      <CustomImage
        heightPercent={40}
        modalImageHeightPercent={70}
        imageURL={'https://picsum.photos/id/33/800'}
      />
    </View>
  );
});
