import {StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/globalFunctions';

export const styles = StyleSheet.create({
  root: {flex: 1},
  bottomSheetContainer: {
    position: 'absolute',
    top: windowHeight,
    height: windowHeight,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: '#777',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
