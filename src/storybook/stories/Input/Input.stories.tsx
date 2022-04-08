import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
// import {action} from '@storybook/addon-actions';
import {Input} from '../../../components/Input';
import {View} from 'react-native';
import {KEYBOARD_TYPE} from '../../../enums/emuns';

storiesOf('Input', module).add('Default', () => {
  return (
    <CenterComponent>
      <View style={{width: 350}}>
        <Input
          onFocus={() => {
            console.log('focused');
          }}
          inputType={KEYBOARD_TYPE.NAME_TYPE}
          textInputProps={{
            value: '',
            onChangeText: () => {},
            onSubmitEditing: () => {},
            returnKeyType: 'next',
            editable: true,
            placeholder: 'First name',
          }}
          // inputStatus={'error'}
          // message={'First name is longer than 100 characters'}
        />
      </View>
    </CenterComponent>
  );
});
