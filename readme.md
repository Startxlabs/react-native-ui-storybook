# react-native-ui-storybook

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Components](#components)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [Radio](#radio)
  - [Input](#input)
  - [Onboard](#onboard)
  - [Otp Input](#otp-input)
  - [Swipe to delete](#swipe-to-delete)
  - [Switch](#switch)
  - [Tabs](#tabs)
  - [Custom Image](#custom-image)
  - [Video Player](#video-player)
  - [Bottom Sheet](#bottom-sheet)
- [Contribute](#contribute)

## Introduction

Component library built using Storybook. Storybook is an open source tool for building UI components and pages in isolation. [More on Storybook](https://storybook.js.org/docs/react/get-started/introduction)

## Installation

1. Run storybook
   `npm run storybook`

2. Run on device
   `npm run ios`

## Components

### Button

#### Usage

```
  <Button
    text={'Custom Button'}
    buttonContainerStyle={{
      backgroundColor: '#fff',
      borderColor: 'crimson',
    }}
    buttonTextStyle={{
      color: '#0D0113',
    }}
  />
```

#### Props

| Prop                 | Type      | Optional | Default  | Description                |
| -------------------- | --------- | -------- | -------- | -------------------------- |
| text                 | string    | No       | 'Button' | Button text                |
| disabled             | bool      | Yes      | false    | Disabled button            |
| buttonContainerStyle | ViewStyle | Yes      | {}       | Container style for button |
| buttonTextStyle      | TextStyle | Yes      | {}       | Text style for button      |
| handlePress          | function  | Yes      |          | Handle button press        |

### Checkbox

#### Usage

```
  <Checkbox
    value={false}
    handleChange={() => {}}
    checkboxStyle={{}}
    hasGradient={true}
  />
```

#### Props

| Prop          | Type      | Optional | Default | Description              |
| ------------- | --------- | -------- | ------- | ------------------------ |
| value         | bool      | No       |         | Default status           |
| checkboxStyle | ViewStyle | Yes      | {}      | Checkbox container style |
| hasGradient   | bool      | Yes      | false   | Gradient background      |
| handleChange  | function  | Yes      |         | Handle checkbox press    |

### Radio

#### Usage

```
  <Radio
    value={false}
    handleChange={() => {}}
    radioStyle={{}}
    hasGradient={true}
  />
```

#### Props

| Prop         | Type      | Optional | Default | Description           |
| ------------ | --------- | -------- | ------- | --------------------- |
| value        | bool      | No       |         | Default status        |
| radioStyle   | ViewStyle | Yes      | {}      | Radio container style |
| hasGradient  | bool      | Yes      | false   | Gradient background   |
| handleChange | function  | Yes      |         | Handle radio press    |

### Input

#### Usage

```
  <Input
    onFocus={() => {}}
    inputType={KEYBOARD_TYPE.NAME_TYPE}
    label={'First name'}
    textInputProps={{
      value: '',
      onChangeText: () => {},
      onSubmitEditing: () => {},
      returnKeyType: 'next',
      editable: true,
      placeholder: 'First name',
    }}
    hasMessageIcon={true}
    isMessageRight={false}
  />
```

#### Props

| Prop                | Type                              | Optional | Default | Description                                                 |
| ------------------- | --------------------------------- | -------- | ------- | ----------------------------------------------------------- |
| label               | string                            | Yes      |         | Label for floating input                                    |
| showLabel           | bool                              | Yes      | false   | Show label on top of input field                            |
| labelTextStyle      | TextStyle                         | Yes      | {}      | Additional Text style for label shown on top of input field |
| disabled            | bool                              | Yes      |         | Input disabled                                              |
| inputType           | string                            | Yes      |         | Keyboard input type                                         |
| inputStatus         | 'success' \| 'error' \| 'default' | Yes      |         | Border color change as per Input status                     |
| inputContainerStyle | ViewStyle                         | Yes      |         | Additional Input container style                            |
| inputTextStyle      | TextStyle                         | Yes      |         | Additional Input Text style                                 |
| message             | string                            | Yes      |         | Message below Input field for validation                    |
| onFocus             | function                          | Yes      |         | Handle Input onFocus                                        |
| textInputProps      | object                            | Yes      |         | Additional Text Input props                                 |
| hasMessageIcon      | bool                              | Yes      | true    | Whether to show icon for message                            |
| isMessageRight      | bool                              | Yes      | false   | Align message to left or right                              |

### Onboard

#### Usage

```
  // * slide data
  const slidesData = [
    {
      image: 'https://picsum.photos/id/200/200/300',
      slideTitle: 'Sell Houses',
      slideBody:
        'Sell houses easily with the help of\nListenoryx and to make this line\nbig I am writing more.',
    },
    {
      image: 'https://picsum.photos/id/208/200/300',
      slideTitle: 'We Warn You',
      slideBody:
        'We warn you whether to put your\nmoney on certain companies or\nnot because we care for you.',
    },
    {
      image: 'https://picsum.photos/id/209/200/300',
      slideTitle: 'Broker Relationship',
      slideBody:
        'Our brokers are good, nice and\nfriendly. We bet you, you feel\nhappy after meeting your broker.',
    },
  ];

  <Onboard
    logo={() => (
      <View
        style={{
          marginTop: EStyleSheet.value('3rem'),
          marginBottom: EStyleSheet.value('2rem'),
        }}>
        <Image source={logo} />
      </View>
    )}
    slides={slidesData}
    // * render custom slides
    renderSlides={() =>
      slidesData.length > 0 &&
      slidesData.map(slide => (
        <View
          key={uuidv4()}
          style={[
            styles.slideStyle,
            {
              width: windowWidth,
              paddingHorizontal: 20,
            },
          ]}>
          <Image
            source={slide.image}
            style={{width: '100%', height: '65%'}}
          />
          <View
            style={{
              justifyContent: 'center',
              height: '35%',
            }}>
            <Text
              allowFontScaling={false}
              style={[styles.sliderText, slideTitleStyle]}>
              {slide.slideTitle}
            </Text>
            <Text style={slideBodyStyle}>{slide.slideBody}</Text>
          </View>
        </View>
      ))
    }
    sliderContainerStyle={{height: '60%'}}
    // * render custom pagination
    renderPagination={(slideIndex: number) =>
      slidesData.length > 0 &&
      slidesData.map((_, index) => (
        <View key={uuidv4()}>
          <View style={{marginHorizontal: 3}}>
            <Image source={index === slideIndex ? dotActive : dotInactive} />
          </View>
        </View>
      ))
    }
    // * render custom footer
    footer={() => (
      <View style={{marginBottom: 35}}>
        <Button
          text={'Get Started'}
          buttonContainerStyle={{
            width: 208,
            height: 58,
            borderRadius: 12,
            backgroundColor: '#87B8B5',
            borderColor: '#87B8B5',
          }}
          buttonTextStyle={{
            fontSize: 21,
            fontWeight: '700',
            color: '#FFFFFF',
          }}
        />
      </View>
    )}
  />
```

#### Props

| Prop                 | Type                                     | Optional | Default | Description                                        |
| -------------------- | ---------------------------------------- | -------- | ------- | -------------------------------------------------- |
| logo                 | function                                 | Yes      |         | Render custom logo (JSX)                           |
| slides               | [{ image: any, slideText: string } ... ] | No       | []      | Slide array to display                             |
| sliderContainerStyle | ViewStyle                                | Yes      |         | Additional slider container style                  |
| defaultText          | string                                   | Yes      |         | Default text below slider                          |
| defaultTextStyle     | TextStyle                                | Yes      |         | Additional default text style                      |
| renderPagination     | function                                 | Yes      |         | Function to render Custom Pagination (JSX)         |
| paginationStyle      | ViewStyle                                | Yes      |         | Additional pagination style for default pagination |
| footer               | function                                 | Yes      |         | Function to render Custom footer (JSX)             |

### Otp Input

#### Usage

```
  <AllOtp
    inputStatusType="default"
    numberOfInputs={4}
    onSubmit={(otp) => {}}
  />
```

#### Props

| Prop            | Type                              | Optional | Default   | Description                                  |
| --------------- | --------------------------------- | -------- | --------- | -------------------------------------------- |
| inputStatusType | "success" \| "error" \| "default" | Yes      | 'default' | Otp input status for validation              |
| numberOfInputs  | number                            | Yes      | 6         | Number of otp input fields                   |
| onSubmit        | (otp: Array<string>) => void      | Yes      |           | Handle otp values once all fields are filled |

### Swipe to delete

#### Usage

```
  <SwipeToDelete
    simultaneousHandlers={flatListRef}
    item={item}
    hasEdit={false}
    hasDelete={true}
    onEdit={onEdit}
    onDelete={onDelete}
  />
```

#### Props

| Prop                 | Type                   | Optional | Default | Description                                |
| -------------------- | ---------------------- | -------- | ------- | ------------------------------------------ |
| item                 | any                    | No       |         | Item to render                             |
| hasEdit              | bool                   | Yes      | false   | Show edit icon on swipe                    |
| hasDelete            | bool                   | Yes      | true    | Show delete icon on swipe                  |
| onEdit               | function               | Yes      |         | Handle edit item                           |
| onDelete             | function               | Yes      |         | Handle delete item                         |
| simultaneousHandlers | PanGestureHandlerProps | Yes      |         | To handle multiple gestures simultaneously |

### Switch

#### Usage

```
  <CustomSwitch
    value={false}
    handleToggle={() => {}}
    width={50}
    height={25}
    thumbWidth={20}
    thumbHeight={20}
    horizontalMargin={2}
    disabled={false}
  />
```

#### Props

| Prop               | Type                            | Optional | Default                                                       | Description                      |
| ------------------ | ------------------------------- | -------- | ------------------------------------------------------------- | -------------------------------- |
| width              | number                          | Yes      | 70                                                            | Width of Switch                  |
| height             | number                          | Yes      | 30                                                            | Height of Switch                 |
| thumbWidth         | number                          | Yes      | 25                                                            | Thumb Width                      |
| thumbHeight        | number                          | Yes      | 25                                                            | Thumb Height                     |
| horizontalMargin   | number                          | Yes      | 2                                                             | Horizontal margin in switch      |
| disabled           | bool                            | Yes      | false                                                         | Disable switch                   |
| trackColor         | { false: string, true: string } | Yes      | { true: rgba(100, 90, 255,0.8), false: rgba(13, 1, 19, 0.1) } | Track color for on and off state |
| activeThumbColor   | string                          | Yes      | '#fff'                                                        | Thumb color when active          |
| inactiveThumbColor | string                          | Yes      | '#fff'                                                        | Thumb color when inactive        |
| value              | bool                            | Yes      |                                                               | Switch state                     |
| handleToggle       | function                        | Yes      |                                                               | Function to handle switch toggle |

### Tabs

#### Usage

```
  <Tabs
    tabsData={[
      {
        title: 'Tab 1',
        tabContent: (
          <View style={tabContentStyle}>
            <Text>Tab 1 content</Text>
          </View>
        ),
      },
      {
        title: 'Tab 2',
        tabContent: (
          <View style={tabContentStyle}>
            <Text>Tab 2 content</Text>
          </View>
        ),
      },
    ]}
  />
```

#### Props

| Prop     | Type                                               | Optional | Default | Description                             |
| -------- | -------------------------------------------------- | -------- | ------- | --------------------------------------- |
| tabsData | [{ title: string, tabContent: JSX.Element }, ... ] | No       |         | Tab data with tab title and tab content |

### Custom Image

#### Usage

```
  <CustomImage
    heightPercent={40}
    imageURL={'https://picsum.photos/id/33/800'}
  />
```

#### Props

| Prop          | Type   | Optional | Default | Description                          |
| ------------- | ------ | -------- | ------- | ------------------------------------ |
| heightPercent | number | Yes      | 35      | Image height as per parent container |
| imageURL      | string | No       |         | Image url to show                    |

### Video Player

#### Usage

```
  <VideoPlayer
    videoSource={
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
    }
    videoPlayerContainerStyles={{
      height: 250,
    }}
    controlIcons={{
      playIcon: () => (
        <Icon name={'play-circle-outline'} size={50} color={'#fff'} />
      ),
      pauseIcon: () => (
        <Icon name={'pause-circle-outline'} size={50} color={'#fff'} />
      ),
      backwardIcon: () => (
        <Icon name={'play-back-outline'} size={30} color={'#fff'} />
      ),
      forwardIcon: () => (
        <Icon name={'play-forward-outline'} size={30} color={'#fff'} />
      ),
    }}
    customThumbComponent={isBigThumb => (
      <View
        style={{
          width: isBigThumb ? 25 : 19,
          height: isBigThumb ? 25 : 19,
          backgroundColor: '#4d4dff',
          borderRadius: 50,
        }}
      />
    )}
    sliderWrapperStyle={isFullScreen => ({
      bottom: isFullScreen ? 10 : -11,
    })}
    customTrackStyle={{
      trackStyle: {height: 4, backgroundColor: '#ddd', borderRadius: 0},
      minimumTrackTintColor: '#4d4dff',
      maximumTrackTintColor: '#ddd',
    }}
  />
```

#### Props

| Prop                       | Type                                                                                            | Optional | Default       | Description                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------- | -------- | ------------- | --------------------------------------------- |
| videoSource                | string                                                                                          | No       |               | Video source to play                          |
| videoPlayerContainerStyles | ViewStyle                                                                                       | No       | {height: 250} | Styles for video container                    |
| controlIcons               | { playIcon?: Function; pauseIcon?: Function; backwardIcon?: Function; forwardIcon?: Function; } | Yes      |               | Pass custom component for basic control icons |
| customThumbComponent       | (isBigThumb?: boolean) => JSX.Element                                                           | Yes      |               | Pass custom thumb component of your liking    |
| sliderWrapperStyle         | (isFullScreen?: boolean) => ViewStyle                                                           | Yes      |               | Custom style for slider container             |
| customTrackStyle           | { trackStyle?: ViewStyle; minimumTrackTintColor?: string; maximumTrackTintColor?: string; }     | Yes      |               | Give custom style to video track              |

### Bottom Sheet

#### Usage

```
  // const ref = useRef<BottomSheetRefPropsI>(null);

  // * handle opening and closing of bottom sheet
  // const onPress = useCallback(() => {
  //   const isActive = ref?.current?.isActive;
  //   if (isActive) {
  //     ref?.current?.scrollTo(0);
  //   } else {
  //     ref?.current?.scrollTo(-100);
  //   }
  // }, []);

  <BottomSheet
    isVisible={true}
    handleDismiss={() => {}}
    hasPanGesture={true}
    bottomSheetContent={() => (
      <View>
        <Text>Bottom sheet content</Text>
      </View>
    )}
  />
```

#### Props

| Prop                      | Type      | Optional | Default | Description                                              |
| ------------------------- | --------- | -------- | ------- | -------------------------------------------------------- |
| isVisible                 | boolean   | Yes      |         | toggle bottom sheet visibility                           |
| handleDismiss             | function  | Yes      |         | handle opening and closing of bottomsheet                |
| hasPanGesture             | boolean   | Yes      | true    | If true, user can hold and slide up/down the bottomsheet |
| bottomSheetContent        | function  | Yes      |         | Render custom component for bottomsheet content          |
| bottomSheetContainerStyle | ViewStyle | Yes      |         | Custom style for bottomsheet container                   |

## Contribute

1. Create stories in '/storybook/stories'
2. Create components for the stories
3. Load newly created story by running
   `npm run prestorybook`

Note: `npm run storybook` runs prestorybook to load all stories too
