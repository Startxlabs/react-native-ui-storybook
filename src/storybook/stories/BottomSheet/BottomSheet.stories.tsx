import React, {useCallback, useRef} from 'react';
import {Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {BottomSheet} from '../../../components/BottomSheet';
// import { BottomSheetRefPropsI } from '../../../components/BottomSheet/BottomSheetInterface';

storiesOf('BottomSheet', module)
  .add('with pan gesture', () => {
    // const ref = useRef<BottomSheetRefPropsI>(null);

    // * handle opening and closing of bottom sheet
    // const onPress = useCallback(() => {
    //   const isActive = ref?.current?.isActive;
    //   if (isActive) {
    //     ref?.current?.scrollTo(0);
    //   } else {
    //     ref?.current?.scrollTo(-100);
    //   }
    // }, []);

    return (
      <View style={{flex: 1, backgroundColor: '#eee'}}>
        <BottomSheet
          isVisible={true}
          handleDismiss={() => {}}
          bottomSheetContent={() => (
            <View>
              <Text>Bottom sheet content</Text>
            </View>
          )}
        />
      </View>
    );
  })
  .add('without pan gesture', () => {
    return (
      <View style={{flex: 1, backgroundColor: '#eee'}}>
        <BottomSheet
          isVisible={true}
          handleDismiss={() => {}}
          hasPanGesture={false}
          bottomSheetContent={() => (
            <View>
              <Text>Bottom sheet content</Text>
            </View>
          )}
          bottomSheetContainerStyle={{
            height: 100,
            width: '90%',
            alignSelf: 'center',
          }}
        />
      </View>
    );
  });
