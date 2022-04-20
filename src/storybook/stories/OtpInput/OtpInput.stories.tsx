import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {AllOtp} from '../../../components/OtpInput';

storiesOf('OtpInput', module).add('Default', () => {
  return (
    <CenterComponent>
      <AllOtp
        inputStatusType="default"
        onSubmit={otp => {
          // console.log('otp--', otp);
        }}
      />
    </CenterComponent>
  );
});
