import {StyleSheet} from 'react-native';
import {LIST_ITEM_HEIGHT} from '../../constants/constants';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    position: 'relative',
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    // Shadow ios
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow android
    elevation: 5,
  },
  itemText: {
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: LIST_ITEM_HEIGHT,
  },
});
