import React, {useRef, useState} from 'react';
import {Animated, Image, ScrollView, Text, View} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {OnboardI} from './OnboardInterface';
import {windowWidth} from '../../utils/globalFunctions';
import {styles} from './OnboardStyles';

export const Onboard = ({
  logo,
  slides = [],
  sliderContainerStyle,
  sliderTextStyle,
  defaultText,
  defaultTextStyle,
  renderPagination,
  paginationStyle,
  button,
  loginOption,
}: OnboardI) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: any) => {
    const positionX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(positionX / windowWidth);

    if (currentIndex !== slideIndex && currentIndex >= 0) {
      setSlideIndex(currentIndex);
    }
  };

  return (
    <View style={styles.root}>
      <View>{logo?.()}</View>
      <View style={[styles.slideScrollContainer, sliderContainerStyle]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
              listener: (event: any) => handleScroll(event),
            },
          )}
          scrollEventThrottle={16}
          disableIntervalMomentum
          snapToInterval={windowWidth}
          snapToAlignment={'center'}>
          {slides.length > 0 &&
            slides.map(slide => (
              <View
                key={uuidv4()}
                style={[
                  styles.slideStyle,
                  {
                    width: windowWidth,
                    paddingHorizontal: 40,
                  },
                ]}>
                <Image
                  source={{uri: slide.image}}
                  style={{width: '100%', height: '80%'}}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    height: '20%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={[styles.sliderText, sliderTextStyle]}>
                    {slide.slideText}
                  </Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>

      <Text style={[styles.defaultText, defaultTextStyle]}>{defaultText}</Text>

      <View style={[styles.paginationWrapper, paginationStyle]}>
        {renderPagination
          ? renderPagination()
          : slides.length > 0 &&
            slides.map((_, index) => (
              <View key={uuidv4()}>
                <View
                  style={[
                    styles.dotStyle,
                    index === slideIndex
                      ? styles.activeDot
                      : styles.inactiveDot,
                  ]}
                />
              </View>
            ))}
      </View>

      <View style={styles.footerWrapper}>
        {button?.()}
        {loginOption?.()}
      </View>
    </View>
  );
};
