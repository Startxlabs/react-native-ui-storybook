import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  root: {
    position: 'relative',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  fullScreenImageWrapper: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  closeIcon: {
    position: 'absolute',
    top: '3rem',
    right: '1rem',
    zIndex: 99,
  },
});
