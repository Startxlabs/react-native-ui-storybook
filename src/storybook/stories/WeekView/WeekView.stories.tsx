import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterComponent from '../CenterComponent';
import {WeekView} from '../../../components/WeekView';
import {format} from 'date-fns';

storiesOf('WeekView', module).add('Default', () => {
  return (
    <CenterComponent>
      <WeekView
        initialDate={new Date()}
        onDateChange={date =>
          console.log('selected date: ', format(date, 'PP'))
        }
        weekDaysContainerStyle={{backgroundColor: '#fff'}}
      />
    </CenterComponent>
  );
});
