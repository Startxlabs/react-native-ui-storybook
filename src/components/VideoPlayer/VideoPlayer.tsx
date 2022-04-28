import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import {isAndroid} from '../../utils/globalFunctions';
import {VideoPlayerI} from './VideoPlayerInterface';
import {styles} from './VideoPlayerStyles';
import VideoSlider from './VideoSlider';
import VideoPlayerControls from './VideoPlayerControls';

export const VideoPlayer = ({
  videoSource,
  videoPlayerContainerStyles,
  controlIcons,
}: VideoPlayerI) => {
  const videoRef = useRef<any>(null);
  const controlsTimerRef = useRef<NodeJS.Timeout>();

  const TEN_SECONDS = 10;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPlaybackModal, setShowPlaybackModal] = useState(false);
  const [activeSpeed, setActiveSpeed] = useState(1);
  const [loop, setLoop] = useState(false);

  // * video load start
  const handleLoadingStart = () => {
    setIsLoading(true);
  };

  // * video load complete
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

  // * change video progress value
  const onProgress = (event: any) => {
    const currentTime = Math.floor(event.currentTime);
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    /**
     * * don't close controls overlay if
     * * video is paused or settings
     * * or playback modal is open
     */
    const shouldCloseControls =
      !isPaused && !showSettings && !showPlaybackModal;

    if (showControls && shouldCloseControls) {
      controlsTimerRef.current = setTimeout(() => {
        if (shouldCloseControls) {
          setShowControls(false);
        }
      }, 5000);

      return () => {
        if (controlsTimerRef.current) {
          clearTimeout(controlsTimerRef.current);
        }
      };
    }
  }, [showControls, isPaused]);

  // * toggle video controls
  const handleToggleControls = () => {
    setShowControls(!showControls);
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

  // * pause video when sliding starts
  const onValuesChangeStart = (value: any) => {
    setCurrentTime(value[0]);
    setIsPaused(true);
  };

  // * update current time once sliding finishes
  const onValuesChangeFinish = (value: any) => {
    const finishAt = Math.floor(value[0]);
    setCurrentTime(finishAt);
    setIsPaused(false);
    videoRef.current?.seek(finishAt);
  };

  // * backward ten seconds
  const handleBackward = () => {
    if (currentTime > TEN_SECONDS) {
      const backTime = currentTime - TEN_SECONDS;
      setCurrentTime(backTime);
      videoRef.current?.seek(backTime);
    } else {
      setCurrentTime(0);
      videoRef.current?.seek(0);
    }
  };

  // * forward ten seconds
  const handleForward = () => {
    if (totalDuration - currentTime > TEN_SECONDS) {
      const forwardTime = currentTime + TEN_SECONDS;
      setCurrentTime(forwardTime);
      videoRef.current?.seek(forwardTime);
    } else {
      setCurrentTime(totalDuration);
      setIsPaused(true);
      setTimeout(() => {
        videoRef.current?.seek(totalDuration);
      }, 100);
    }
  };

  // * change video speed
  const handlePlaybackSpeed = (speed: number) => {
    setActiveSpeed(speed);
  };

  // * toggle loop
  const handleLoop = (value: boolean) => {
    setLoop(value);
    setIsPaused(false);
  };

  // * when video ends
  const onEnd = () => {
    setCurrentTime(0);
    if (!loop) {
      setIsPaused(true);
      setTimeout(() => {
        videoRef.current?.seek(0);
      }, 1000);
    }
  };

  return (
    <View
      style={[
        styles.root,
        isFullScreen ? styles.fullScreenStyle : videoPlayerContainerStyles,
      ]}>
      {isLoading ? (
        <View style={styles.statusWrapper}>
          <ActivityIndicator />
        </View>
      ) : (
        <></>
      )}

      {error.length > 0 ? (
        <View style={styles.statusWrapper}>
          <Text>{error}</Text>
        </View>
      ) : (
        <></>
      )}

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
          onBuffer={e => console.log('buffering', e)}
          controls={false}
          onError={(err: any) => setError(err)}
          style={styles.videoStyle}
          resizeMode={'cover'}
          fullscreenOrientation={'landscape'}
          rate={activeSpeed}
          repeat={loop}
          onEnd={onEnd}
        />
      </TouchableOpacity>

      {/* Controls */}
      {(showControls || showSettings || showPlaybackModal) && (
        <VideoPlayerControls
          isPaused={isPaused}
          isFullScreen={isFullScreen}
          currentTime={currentTime}
          totalDuration={totalDuration}
          handleToggleControls={handleToggleControls}
          additionalControlProps={{
            controlIcons,
            handleBackward,
            handlePlayPause,
            handleForward,
            handleToggleFullScreen,
            showSettings,
            handleCloseSettingsModal: (value: boolean) =>
              setShowSettings(value),
            showPlaybackModal,
            handleClosePlaybackModal: (value: boolean) =>
              setShowPlaybackModal(value),
            activeSpeed,
            handlePlaybackSpeed,
            loop,
            handleLoop,
          }}
        />
      )}

      {/* Slider */}
      <View style={[styles.sliderWrapper, {bottom: isFullScreen ? 10 : -11}]}>
        {((showControls && isFullScreen) || !isFullScreen) && (
          <VideoSlider
            showControls={showControls}
            value={currentTime}
            min={0}
            max={totalDuration}
            onValuesChangeStart={onValuesChangeStart}
            onValuesChangeFinish={onValuesChangeFinish}
            disabled={isLoading}
          />
        )}
      </View>
    </View>
  );
};
