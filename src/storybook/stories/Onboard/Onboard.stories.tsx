import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Onboard} from '../../../components/Onboard';
import {Image, StyleProp, Text, TextStyle, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {v4 as uuidv4} from 'uuid';
import {Button} from '../../../components/Button';
import {styles} from '../../../components/Onboard/OnboardStyles';
import {windowWidth} from '../../../utils/globalFunctions';
// import {action} from '@storybook/addon-actions';

storiesOf('Onboard', module)
  .add('Default', () => {
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
            image: {uri: 'https://picsum.photos/id/10/300'},
            slideText: 'Instant Member Pricing &\nSpecial Offers',
          },
          {
            image: {uri: 'https://picsum.photos/id/12/300'},
            slideText: 'Be Rewarded with Special\nOffers and Birthday Bonuses',
          },
          {
            image: {uri: 'https://picsum.photos/id/20/300'},
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
  })
  .add('Example', () => {
    // * assets
    const logo = require('../../../assets/images/OnboardLogo.png');
    const finances1 = require('../../../assets/images/Finances1.png');
    const finances2 = require('../../../assets/images/Finances2.png');
    const finances3 = require('../../../assets/images/Finances3.png');
    const dotActive = require('../../../assets/images/DotActive.png');
    const dotInactive = require('../../../assets/images/DotInactive.png');

    // * default slide title text style
    const slideTitleStyle: StyleProp<TextStyle> = {
      marginBottom: 12,
      lineHeight: 42,
      fontSize: 28,
    };

    // * default slide body text style
    const slideBodyStyle: StyleProp<TextStyle> = {
      textAlign: 'center',
      fontSize: 17,
      lineHeight: 25,
      color: '#A6A6A6',
    };

    // * slide data
    const slidesData = [
      {
        image: finances1,
        slideTitle: 'Sell Houses',
        slideBody:
          'Sell houses easily with the help of\nListenoryx and to make this line\nbig I am writing more.',
      },
      {
        image: finances2,
        slideTitle: 'We Warn You',
        slideBody:
          'We warn you whether to put your\nmoney on certain companies or\nnot because we care for you.',
      },
      {
        image: finances3,
        slideTitle: 'Broker Relationship',
        slideBody:
          'Our brokers are good, nice and\nfriendly. We bet you, you feel\nhappy after meeting your broker.',
      },
    ];

    return (
      <Onboard
        logo={() => (
          <View
            style={{
              marginTop: EStyleSheet.value('3rem'),
              marginBottom: EStyleSheet.value('3rem'),
            }}>
            <Image source={logo} />
          </View>
        )}
        slides={slidesData}
        // * render custom slides
        renderSlides={() =>
          slidesData.length > 0 &&
          slidesData.map(slide => (
            <View
              key={uuidv4()}
              style={[
                styles.slideStyle,
                {
                  width: windowWidth,
                  paddingHorizontal: 20,
                },
              ]}>
              <Image
                source={slide.image}
                style={{width: '100%', height: '70%'}}
              />
              <View
                style={{
                  justifyContent: 'center',
                  height: '30%',
                }}>
                <Text
                  allowFontScaling={false}
                  style={[styles.sliderText, slideTitleStyle]}>
                  {slide.slideTitle}
                </Text>
                <Text style={slideBodyStyle}>{slide.slideBody}</Text>
              </View>
            </View>
          ))
        }
        sliderContainerStyle={{height: '60%'}}
        // * render custom pagination
        renderPagination={(slideIndex: number) =>
          slidesData.length > 0 &&
          slidesData.map((_, index) => (
            <View key={uuidv4()}>
              <View style={{marginHorizontal: 3}}>
                <Image
                  source={index === slideIndex ? dotActive : dotInactive}
                />
              </View>
            </View>
          ))
        }
        button={() => (
          <View style={{marginBottom: 35}}>
            <Button
              text={'Get Started'}
              buttonContainerStyle={{
                width: 208,
                height: 58,
                borderRadius: 12,
                backgroundColor: '#87B8B5',
                borderColor: '#87B8B5',
              }}
              buttonTextStyle={{
                fontSize: 21,
                fontWeight: '700',
                color: '#FFFFFF',
              }}
            />
          </View>
        )}
      />
    );
  });
