import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button, GradientButton} from '../../../components/Button';
import CenterComponent from '../CenterComponent';
import {action} from '@storybook/addon-actions';
import {View} from 'react-native';

export const actions = {
  handlePress: action('button pressed'),
};

storiesOf('Button', module)
  .add('Primary', () => (
    <CenterComponent>
      <Button
        text={'Primary Button'}
        buttonContainerStyle={{
          backgroundColor: '#0D0113',
          borderColor: '#0D0113',
        }}
        {...actions}
      />
    </CenterComponent>
  ))
  .add('Disabled', () => (
    <CenterComponent>
      <Button
        text={'Disabled Button'}
        buttonContainerStyle={{
          backgroundColor: 'rgba(13, 1, 19, 0.2)',
          borderColor: 'transparent',
        }}
        disabled
      />
    </CenterComponent>
  ))
  .add('Custom', () => (
    <CenterComponent>
      <Button
        text={'Custom Button'}
        buttonContainerStyle={{
          backgroundColor: '#fff',
          borderColor: 'crimson',
        }}
        buttonTextStyle={{
          color: '#0D0113',
        }}
        {...actions}
      />
    </CenterComponent>
  ))
  .add('Gradient', () => (
    <CenterComponent>
      <>
        <GradientButton text={'Gradient Button'} {...actions} />
        <View style={{marginBottom: 20}} />
        <GradientButton
          text={'Gradient Button'}
          colorsArray={['crimson', '#333']}
          {...actions}
        />
      </>
    </CenterComponent>
  ));
