import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import {MoreSettingsI} from './VideoPlayerInterface';
import {styles} from './VideoPlayerStyles';

const MoreSettings = ({
  showSettings,
  onClose,
  moreSettingsProps,
}: MoreSettingsI) => {
  const {activeSpeed, handlePlaybackModal, loop, handleToggleLoop} =
    moreSettingsProps;

  return (
    <Modal
      isVisible={showSettings}
      onBackdropPress={onClose}
      style={styles.modalStyle}>
      <View style={settingStyles.container}>
        {/* Playback speed */}
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => {
            handlePlaybackModal(true);
          }}
          activeOpacity={0.85}>
          <View style={settingStyles.iconStyle}>
            <Icon name={'play-circle-outline'} size={25} color={'#000'} />
          </View>
          <Text
            onPress={() => {
              handlePlaybackModal(true);
            }}
            style={settingStyles.settingText}>
            Playback speed
          </Text>
          <View style={settingStyles.grayDot} />
          <Text style={settingStyles.activeSettingText}>
            {activeSpeed === 1 ? 'Normal' : `${activeSpeed}x`}
          </Text>
        </TouchableOpacity>

        {/* Loop */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => handleToggleLoop(!loop)}
          style={styles.flexRow}>
          <View style={settingStyles.iconStyle}>
            <FIcon name={'repeat'} size={22} color={'#000'} />
          </View>
          <Text style={settingStyles.settingText}>Loop video</Text>
          <View style={settingStyles.grayDot} />
          <Text style={settingStyles.activeSettingText}>
            {loop ? 'On' : 'Off'}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MoreSettings;

const settingStyles = StyleSheet.create({
  container: {
    minHeight: 150,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 20,
  },
  iconStyle: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingText: {
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 15,
  },
  grayDot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginRight: 15,
  },
  activeSettingText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
  },
});
