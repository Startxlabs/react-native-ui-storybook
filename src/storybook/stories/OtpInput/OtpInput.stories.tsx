import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {v4 as uuidv4} from 'uuid';
import CenterComponent from '../CenterComponent';
import {OtpInput} from '../../../components/OtpInput';
import {View} from 'react-native';

storiesOf('OtpInput', module).add('Default', () => {
  return (
    <CenterComponent>
      <View style={{flexDirection: 'row'}}>
        {[...Array(6).keys()].map(item => (
          <OtpInput
            key={uuidv4()}
            // ref={ref}
            value={item.toString()}
            textInputFocus={() => {}}
            textInputBlur={() => {}}
            // onChangeText={(text) => handleChange(index, text)}
            // onSubmitEditing={() => handleJumpCursor(index, "next")}
            // onKeyPress={(nativeEvent) => goBack(index)}
          />
        ))}
      </View>
    </CenterComponent>
  );
});
