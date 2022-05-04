import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {TabsI} from './TabsInterface';
import {windowWidth} from '../../utils/globalFunctions';
import TabContent from './TabContent';
import {styles} from './TabStyles';

export const Tabs = ({tabsData}: TabsI) => {
  const defaultTabWidth = Math.ceil((windowWidth - 40) / tabsData.length);
  const tabWidth = defaultTabWidth < 100 ? 100 : defaultTabWidth;
  const tabHeaderRef = useRef<FlatList>(null);
  const flatListRef = useRef<FlatList>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: activeTabIndex,
      animated: true,
    });

    tabHeaderRef.current?.scrollToIndex({
      index: activeTabIndex,
      animated: true,
      viewPosition: 0.5,
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
          <FlatList
            ref={tabHeaderRef}
            data={tabsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View>
                <TouchableOpacity
                  key={`title-${index}`}
                  activeOpacity={0.8}
                  onPress={() => {
                    setActiveTabIndex(index);
                  }}
                  style={[styles.headerTitleWrapper, {width: tabWidth}]}>
                  <Text style={styles.headerText}>{item.title}</Text>
                </TouchableOpacity>
                <View style={{position: 'relative'}}>
                  {activeTabIndex === index && (
                    <Animated.View
                      style={[
                        styles.activeHeaderBorder,
                        {width: tabWidth, bottom: 0},
                      ]}
                    />
                  )}
                </View>
              </View>
            )}
          />
          <View
            style={[styles.borderWrapper, {width: '100%', paddingBottom: 2}]}>
            <View style={styles.tabHeaderBorder} />
          </View>
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
