import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/globalFunctions';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center',
  },
  tabHeaderStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  headerTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
  },
  borderWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  tabHeaderBorder: {
    width: '100%',
    height: 1,
    backgroundColor: '#B95D3B',
  },
  activeHeaderBorder: {
    position: 'absolute',
    height: 4,
    borderRadius: 2,
    backgroundColor: '#B95D3B',
  },
  tabWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  tabContentWrapper: {
    flex: 1,
    width: windowWidth - 40,
  },
});
