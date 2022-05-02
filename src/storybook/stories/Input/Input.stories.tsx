import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {Input} from '../../../components/Input';
import {View} from 'react-native';
import {KEYBOARD_TYPE} from '../../../enums/emuns';

// * pass showLabel to show label at the top
// * pass isFloating for floating input
storiesOf('Input', module)
  .add('Default', () => {
    return (
      <CenterComponent>
        <View style={{width: 350}}>
          <Input
            onFocus={() => {
              console.log('focused');
            }}
            inputType={KEYBOARD_TYPE.NAME_TYPE}
            showLabel
            label={'First name'}
            labelTextStyle={{}}
            textInputProps={{
              value: '',
              onChangeText: () => {},
              onSubmitEditing: () => {},
              returnKeyType: 'next',
              editable: true,
              placeholder: 'First name',
            }}
            hasMessageIcon={true}
            isMessageRight={false}
            // inputStatus={'error'}
            // message={'First name is longer than 100 characters'}
          />
        </View>
      </CenterComponent>
    );
  })
  .add('Floating', () => {
    return (
      <CenterComponent>
        <View style={{width: 350}}>
          <Input
            onFocus={() => {
              console.log('focused');
            }}
            inputType={KEYBOARD_TYPE.NAME_TYPE}
            isFloating
            label={'First name'}
            textInputProps={{
              value: '',
              onChangeText: () => {},
              onSubmitEditing: () => {},
              returnKeyType: 'next',
              editable: true,
              placeholder: 'First name',
            }}
            hasMessageIcon={true}
            isMessageRight={false}
            // inputStatus={'error'}
            // message={'First name is longer than 100 characters'}
          />
        </View>
      </CenterComponent>
    );
  })
  .add('without Floating', () => {
    return (
      <CenterComponent>
        <View style={{width: 350}}>
          <Input
            onFocus={() => {
              console.log('focused');
            }}
            inputType={KEYBOARD_TYPE.NAME_TYPE}
            label={'First name'}
            textInputProps={{
              value: '',
              onChangeText: () => {},
              onSubmitEditing: () => {},
              returnKeyType: 'next',
              editable: true,
              placeholder: 'First name',
            }}
            hasMessageIcon={true}
            isMessageRight={false}
            // inputStatus={'error'}
            // message={'First name is longer than 100 characters'}
          />
        </View>
      </CenterComponent>
    );
  });
