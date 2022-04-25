import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  fullScreenStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlsOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsWrapper: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    height: 25,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  durationText: {
    color: '#fff',
    width: 32,
    textAlign: 'center',
    fontSize: 12,
  },
  totalDurationText: {
    color: 'rgba(255,255,255, 0.7)',
  },
  durationSeparator: {
    color: 'rgba(255,255,255, 0.7)',
    fontSize: 12,
  },
});
