import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as FAIcon from 'react-native-vector-icons/FontAwesome';
import * as MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './VideoPlayerStyles';
import {VideoPlayerControlsI} from './VideoPlayerInterface';
import {formatTime} from '../../utils/globalFunctions';

const FontAwesomeIcon = FAIcon.default;
const MaterialCommunityIcon = MIcons.default;

const VideoPlayerControls = ({
  isPaused,
  isFullScreen,
  currentTime,
  totalDuration,
  handleToggleControls,
  handleBackward,
  handlePlayPause,
  handleForward,
  handleToggleFullScreen,
}: VideoPlayerControlsI) => {
  return (
    <TouchableOpacity
      style={styles.controlsOverlay}
      activeOpacity={0.85}
      onPress={handleToggleControls}>
      <View style={[styles.flexRow, styles.mainControlsWrapper]}>
        <TouchableOpacity onPress={handleBackward} activeOpacity={0.85}>
          <Icon name={'play-back'} size={30} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause} activeOpacity={0.85}>
          {isPaused ? (
            <Icon name={'play'} size={50} color={'#fff'} />
          ) : (
            <FontAwesomeIcon name={'pause'} size={40} color={'#fff'} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward} activeOpacity={0.85}>
          <Icon name={'play-forward'} size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>

      <View style={styles.controlsWrapper}>
        <View style={styles.flexRow}>
          <Text style={styles.durationText}>{formatTime(currentTime)}</Text>
          <Text style={styles.durationSeparator}>{'/'}</Text>
          <Text style={[styles.durationText, styles.totalDurationText]}>
            {formatTime(totalDuration)}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.85} onPress={handleToggleFullScreen}>
          <MaterialCommunityIcon
            name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
            size={18}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default VideoPlayerControls;
