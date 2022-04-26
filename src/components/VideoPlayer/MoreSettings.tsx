import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {MoreSettingsI} from './VideoPlayerInterface';
import {styles} from './VideoPlayerStyles';

const MoreSettings = ({
  showSettings,
  onClose,
  handlePlaybackModal,
}: MoreSettingsI) => {
  return (
    <Modal
      isVisible={showSettings}
      onBackdropPress={onClose}
      style={styles.modalStyle}>
      <View style={settingStyles.container}>
        <Text
          onPress={() => {
            if (handlePlaybackModal) {
              handlePlaybackModal(true);
            }
          }}
          style={settingStyles.settingText}>
          Playback speed
        </Text>
      </View>
    </Modal>
  );
};

export default MoreSettings;

const settingStyles = StyleSheet.create({
  container: {
    minHeight: 200,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  settingText: {
    paddingVertical: 10,
    fontSize: 16,
  },
});
