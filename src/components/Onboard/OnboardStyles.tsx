import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../constants/colors';

export const styles = EStyleSheet.create({
  root: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  slideScrollContainer: {
    width: '100%',
    height: '40%',
  },
  slideStyle: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: COLORS.black_rgba(1),
  },
  defaultText: {
    textAlign: 'center',
    fontSize: '0.9rem',
    fontWeight: '400',
    color: COLORS.black_rgba(0.5),
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    borderRadius: 10,
    marginHorizontal: 2,
  },
  inactiveDot: {
    width: 7,
    height: 7,
    backgroundColor: COLORS.black_rgba(0.2),
  },
  activeDot: {
    width: 9,
    height: 9,
    backgroundColor: COLORS.purple_rgba(0.8),
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
