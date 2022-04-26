import React, {useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import {isAndroid, windowWidth} from '../../utils/globalFunctions';
import {VideoPlayerI} from './VideoPlayerInterface';
import {styles} from './VideoPlayerStyles';
import VideoSlider from './VideoSlider';
import VideoPlayerControls from './VideoPlayerControls';

export const VideoPlayer = ({
  videoSource,
  videoPlayerContainerStyles,
}: VideoPlayerI) => {
  const videoRef = useRef<any>(null);

  const TEN_SECONDS = 10;
  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
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

  // * pause video when sliding starts
  const onValuesChangeStart = () => {
    setIsPaused(true);
  };

  // * update current time once sliding finishes
  const onValuesChangeFinish = (range: Array<number>) => {
    setCurrentTime(range[0]);
    setIsPaused(false);
    videoRef.current?.seek(range[0]);
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

  // * when video ends
  const onEnd = () => {
    setCurrentTime(0);
    setIsPaused(true);
    setTimeout(() => {
      videoRef.current?.seek(0);
    }, 1000);
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
          style={{width: '100%', height: '100%'}}
          resizeMode={'cover'}
          fullscreenOrientation={'landscape'}
          onEnd={onEnd}
        />
      </TouchableOpacity>

      {/* Controls */}
      {showControls && (
        <VideoPlayerControls
          isPaused={isPaused}
          isFullScreen={isFullScreen}
          currentTime={currentTime}
          totalDuration={totalDuration}
          handleToggleControls={handleToggleControls}
          handleBackward={handleBackward}
          handlePlayPause={handlePlayPause}
          handleForward={handleForward}
          handleToggleFullScreen={handleToggleFullScreen}
        />
      )}

      {/* Slider */}
      <View style={styles.sliderWrapper}>
        <VideoSlider
          showControls={showControls}
          value={currentTime}
          min={0}
          max={totalDuration}
          sliderLength={windowWidth}
          onValuesChangeStart={onValuesChangeStart}
          onValuesChangeFinish={onValuesChangeFinish}
          enableOne={!isLoading}
        />
      </View>
    </View>
  );
};
