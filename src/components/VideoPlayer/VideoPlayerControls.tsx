import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {v4 as uuidv4} from 'uuid';
import Icon from 'react-native-vector-icons/Ionicons';
import * as FAIcon from 'react-native-vector-icons/FontAwesome';
import * as MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './VideoPlayerStyles';
import {VideoPlayerControlsI} from './VideoPlayerInterface';
import {formatTime} from '../../utils/globalFunctions';
import MoreSettings from './MoreSettings';

const FontAwesomeIcon = FAIcon.default;
const MaterialCommunityIcon = MIcons.default;

const VideoPlayerControls = ({
  isPaused,
  isFullScreen,
  currentTime,
  totalDuration,
  handleToggleControls,
  additionalControlProps,
}: VideoPlayerControlsI) => {
  const SPEED = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  const {
    handleBackward,
    handlePlayPause,
    handleForward,
    handleToggleFullScreen,
    showSettings,
    handleCloseSettingsModal,
    showPlaybackModal,
    handleClosePlaybackModal,
    activeSpeed,
    handlePlaybackSpeed,
  } = additionalControlProps;

  const handleSettings = (value: boolean) => {
    handleCloseSettingsModal(value);
  };

  const handlePlaybackModal = (value: boolean) => {
    handleSettings(false);
    handleClosePlaybackModal(value);
  };

  const handlePlaybackSpeedChange = (speed: number) => {
    handlePlaybackSpeed(speed);
    handleClosePlaybackModal(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.controlsOverlay}
        activeOpacity={0.85}
        onPress={handleToggleControls}>
        {/* Controls Header */}
        <TouchableOpacity
          onPress={() => handleSettings(true)}
          activeOpacity={0.85}
          style={styles.settingsWrapper}>
          <Icon name={'settings-outline'} size={20} color={'#fff'} />
        </TouchableOpacity>

        {/* Controls Middle */}
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

        {/* Controls Footer */}
        <View style={styles.controlsWrapper}>
          <View style={styles.flexRow}>
            <Text style={styles.durationText}>{formatTime(currentTime)}</Text>
            <Text style={styles.durationSeparator}>{'/'}</Text>
            <Text style={[styles.durationText, styles.totalDurationText]}>
              {formatTime(totalDuration)}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleToggleFullScreen}>
            <MaterialCommunityIcon
              name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
              size={18}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {showSettings && (
        <MoreSettings
          showSettings={showSettings}
          onClose={() => handleSettings(false)}
          handlePlaybackModal={handlePlaybackModal}
        />
      )}
      {showPlaybackModal && (
        <Modal
          isVisible={showPlaybackModal}
          onBackdropPress={() => handlePlaybackModal(false)}
          style={styles.modalStyle}>
          <View style={styles.playbackContainer}>
            {SPEED.map((item: number) => (
              <TouchableOpacity
                key={uuidv4()}
                style={styles.flexRow}
                activeOpacity={0.85}
                onPress={() => handlePlaybackSpeedChange(item)}>
                <View style={{width: 40}}>
                  {item === activeSpeed && (
                    <Icon name={'checkmark'} size={20} color={'#000'} />
                  )}
                </View>
                <Text style={styles.playbackSpeedText}>
                  {item === 1 ? 'Normal' : `${item}x`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      )}
    </>
  );
};

export default VideoPlayerControls;
