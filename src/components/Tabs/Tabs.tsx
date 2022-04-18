import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {TabsI} from '../../interfaces/TabsInterface';
import {windowWidth} from '../../utils/globalFunctions';
import TabContent from './TabContent';
import {styles} from './TabStyles';

export const Tabs = ({tabsData}: TabsI) => {
  const tabWidth = Math.ceil((windowWidth - 40) / tabsData.length);
  const flatListRef = useRef<FlatList>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeBorderStyles = useAnimatedStyle(() => {
    return {
      marginLeft: withTiming(tabWidth * activeTabIndex, {duration: 400}),
    };
  });

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: activeTabIndex,
      animated: true,
    });
  }, [activeTabIndex]);

  const _onViewableItemsChanged = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveTabIndex(viewableItems[0]?.index);
    }
  }, []);

  return (
    <View style={styles.root}>
      <View style={{flex: 1, width: windowWidth - 40}}>
        <View style={styles.tabHeaderStyle}>
          {tabsData.map((item, idx) => (
            <TouchableOpacity
              key={`title-${idx}`}
              activeOpacity={0.8}
              onPress={() => {
                setActiveTabIndex(idx);
              }}
              style={[styles.headerTitleWrapper, {width: tabWidth}]}>
              <Text style={styles.headerText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.borderWrapper}>
          <View style={styles.tabHeaderBorder} />
          <Animated.View
            style={[
              styles.activeHeaderBorder,
              {width: tabWidth},
              activeBorderStyles,
            ]}
          />
        </View>

        <View style={styles.tabWrapper}>
          <FlatList
            ref={flatListRef}
            initialScrollIndex={activeTabIndex}
            horizontal
            keyExtractor={(_, idx) => `tab-${idx}`}
            bounces={false}
            pagingEnabled
            disableIntervalMomentum
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate={'fast'}
            snapToInterval={windowWidth - 40}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 100,
            }}
            onViewableItemsChanged={_onViewableItemsChanged}
            data={tabsData}
            renderItem={({item}) => <TabContent tabContent={item.tabContent} />}
          />
        </View>
      </View>
    </View>
  );
};
