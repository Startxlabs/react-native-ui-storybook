import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    position: 'relative',
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    maxHeight: 50,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  labelStyle: {
    position: 'absolute',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    fontSize: 12,
    backgroundColor: COLORS.white,
  },
  inputText: {
    fontSize: 12,
    color: COLORS.black_rgba(0.8),
    height: '100%',
    width: '86%',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  isdContainer: {
    position: 'absolute',
    height: '100%',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    zIndex: 999,
  },
  line: {
    position: 'absolute',
    height: '70%',
    width: 1,
    backgroundColor: COLORS.black_rgba(0.1),
    right: 0,
  },
  isdText: {
    fontSize: 12,
    color: COLORS.black_rgba(0.8),
    marginRight: 5,
  },
  textArea: {
    height: 160,
    maxHeight: 160,
    paddingTop: 15,
  },
});
