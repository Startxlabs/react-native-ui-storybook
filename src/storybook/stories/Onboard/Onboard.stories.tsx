import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Onboard} from '../../../components/Onboard';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button} from '../../../components/Button';
// import {action} from '@storybook/addon-actions';

storiesOf('Onboard', module).add('Default', () => {
  return (
    <Onboard
      logo={() => (
        <View
          style={{
            marginTop: EStyleSheet.value('3rem'),
            marginBottom: EStyleSheet.value('4rem'),
          }}>
          <Text>Logo</Text>
        </View>
      )}
      slides={[
        {
          image: 'https://picsum.photos/id/10/300',
          slideText: 'Instant Member Pricing &\nSpecial Offers',
        },
        {
          image: 'https://picsum.photos/id/12/300',
          slideText: 'Be Rewarded with Special\nOffers and Birthday Bonuses',
        },
        {
          image: 'https://picsum.photos/id/20/300',
          slideText: 'Join Reward me',
        },
      ]}
      sliderContainerStyle={{height: '55%'}}
      sliderTextStyle={{lineHeight: 25}}
      defaultText={
        'Sign in or create your account to start\nreceiving amazing benefits.'
      }
      defaultTextStyle={{
        lineHeight: 20,
        marginTop: 5,
        marginBottom: 20,
      }}
      // renderPagination={() => {}}
      // paginationStyle={{position: 'absolute', top: 105, right: 38}}
      button={() => (
        <View style={{marginBottom: 25}}>
          <Button text={'Join Now'} />
        </View>
      )}
      loginOption={() => (
        <View style={{flexDirection: 'row'}}>
          <Text>Already a Member? </Text>
          <Text
            style={{
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}>
            Login
          </Text>
        </View>
      )}
    />
  );
});
