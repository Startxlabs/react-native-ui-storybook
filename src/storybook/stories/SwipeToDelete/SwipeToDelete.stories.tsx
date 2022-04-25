import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {SwipeToDelete} from '../../../components/SwipeToDelete';
import {v4 as uuidv4} from 'uuid';
import {FlatList} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    todo: 'Awesome 🎉',
  },
  {
    id: 2,
    todo: 'Eat some food 🥗',
  },
  {
    id: 3,
    todo: 'Wash some clothes 👕',
  },
  {
    id: 4,
    todo: 'Do some coding 🧑‍💻',
  },
  {
    id: 5,
    todo: 'Exercise 💪',
  },
  {
    id: 6,
    todo: 'Nice 😊',
  },
];

storiesOf('Swipe To Delete', module)
  .add('Example', () => {
    // todo: handle edit item
    const onEdit = () => {};
    // todo: handle delete item
    const onDelete = () => {};

    /**
     *
     * * use this ref to make use of multiple gestures
     * * together e.g, scroll and swipe
     */
    // const flatListRef = useRef();

    const renderItem = ({item}: any) => {
      return (
        <View key={uuidv4()}>
          <SwipeToDelete
            /* simultaneousHandlers={flatListRef} */
            item={item}
            hasEdit={false}
            hasDelete={true}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </View>
      );
    };

    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <FlatList
          /* ref={flatListRef} */
          data={data}
          renderItem={renderItem}
        />
      </View>
    );
  })
  .add('with edit and delete', () => {
    // todo: handle edit item
    const onEdit = () => {};
    // todo: handle delete item
    const onDelete = () => {};

    /**
     *
     * * use this ref to make use of multiple gestures
     * * together e.g, scroll and swipe
     */
    // const flatListRef = useRef();

    const renderItem = ({item}: any) => {
      return (
        <View key={uuidv4()}>
          <SwipeToDelete
            /* simultaneousHandlers={flatListRef} */
            item={item}
            hasEdit={true}
            hasDelete={true}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </View>
      );
    };

    return (
      <View style={{flex: 1, backgroundColor: '#fafafa'}}>
        <FlatList
          /* ref={flatListRef} */
          data={data}
          renderItem={renderItem}
        />
      </View>
    );
  });
