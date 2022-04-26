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
  sliderWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  mainControlsWrapper: {
    width: 220,
    justifyContent: 'space-between',
  },
  settingsWrapper: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  modalStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    margin: 0,
  },
  playbackContainer: {
    minHeight: 350,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  playbackSpeedText: {
    fontSize: 14,
    paddingVertical: 10,
    width: '100%',
  },
});
