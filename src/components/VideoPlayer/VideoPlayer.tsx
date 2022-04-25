import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/Ionicons';
import * as FAIcon from 'react-native-vector-icons/FontAwesome';
import * as MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatTime, isAndroid} from '../../utils/globalFunctions';
import {VideoPlayerI} from './VideoPlayerInterface';
import {styles} from './VideoPlayerStyles';

const FontAwesomeIcon = FAIcon.default;
const MaterialCommunityIcon = MIcons.default;

export const VideoPlayer = ({
  videoSource,
  videoPlayerContainerStyles,
}: VideoPlayerI) => {
  const videoRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleLoadingStart = () => {
    setIsLoading(true);
  };

  const handleLoaded = (event: any) => {
    const current = Math.floor(event.currentTime);
    const total = Math.floor(event.duration);

    setIsLoading(false);
    setCurrentTime(current);
    setTotalDuration(total);
  };

  // * toggle video play and pause
  const handlePlayPause = () => {
    if (!isLoading) {
      setIsPaused(!isPaused);
    }

    if (isPaused) {
      setTimeout(() => {
        setShowControls(false);
      }, 500);
    } else {
      setShowControls(true);
    }
  };

  const onProgress = (event: any) => {
    const currentTime = Math.floor(event.currentTime);
    setCurrentTime(currentTime);
  };

  // * toggle video controls
  const handleToggleControls = () => {
    if (showControls) {
      setShowControls(false);
    } else {
      setShowControls(true);
      if (!isPaused) {
        setTimeout(() => {
          setShowControls(false);
        }, 5000);
      }
    }
  };

  //* toggle fullscreen view
  const handleToggleFullScreen = () => {
    if (isFullScreen) {
      videoRef.current?.dismissFullscreenPlayer();
      Orientation.lockToPortrait();
    } else {
      if (isAndroid()) {
        videoRef.current?.presentFullscreenPlayer();
      }
      Orientation.lockToLandscapeRight();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <View
      style={[
        styles.root,
        isFullScreen ? styles.fullScreenStyle : videoPlayerContainerStyles,
      ]}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={handleToggleControls}
        style={{width: '100%', height: '100%'}}>
        <Video
          ref={videoRef}
          source={{
            uri: videoSource,
          }}
          onLoadStart={handleLoadingStart}
          onLoad={handleLoaded}
          paused={isPaused}
          onProgress={onProgress}
          onBuffer={() => console.log('buffering')}
          controls={false}
          onError={err => console.log('error occurred', err)}
          style={{width: '100%', height: '100%', position: 'absolute'}}
          resizeMode={'cover'}
          fullscreenOrientation={'landscape'}
        />
      </TouchableOpacity>
      {(showControls || isPaused) && (
        <TouchableOpacity
          style={styles.controlsOverlay}
          activeOpacity={0.85}
          onPress={handleToggleControls}>
          <TouchableOpacity onPress={handlePlayPause} activeOpacity={0.85}>
            {isPaused ? (
              <Icon name={'play'} size={40} color={'#fff'} />
            ) : (
              <FontAwesomeIcon name={'pause'} size={30} color={'#fff'} />
            )}
          </TouchableOpacity>

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
      )}
    </View>
  );
};
