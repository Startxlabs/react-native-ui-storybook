import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {CustomSwitch, DefaultSwitch} from '../../../components/Switch';
import {COLORS} from '../../../constants/colors';
// import {action} from '@storybook/addon-actions';

storiesOf('Switch', module)
  .add('Default', () => {
    return (
      <CenterComponent>
        <DefaultSwitch
          value={true}
          handleToggle={() => {}}
          disabled={false}
          ios_backgroundColor={'#ddd'}
          activeThumbColor={'#fff'}
          inactiveThumbColor={'#fff'}
          trackColor={{false: '#fff', true: COLORS.purple_rgba(0.8)}}
        />
      </CenterComponent>
    );
  })
  .add('Custom', () => {
    return (
      <CenterComponent>
        <CustomSwitch
          value={false}
          // handleToggle={() => {}}
          width={50}
          height={25}
          thumbWidth={20}
          thumbHeight={20}
          horizontalMargin={2}
          disabled={false}
        />
      </CenterComponent>
    );
  });
