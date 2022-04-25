# react-native-ui-storybook

## Table of contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Components](#components)
  - [Button](#button)
  - [Checkbox and Radio](#checkbox-and-radio)
  - [Input](#input)
  - [Onboard](#onboard)
  - [Otp Input](#otp-input)
  - [Swipe to delete](#swipe-to-delete)
  - [Switch](#switch)
  - [Tabs](#tabs)
  - [Custom Image](#custom-image)
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
    bgColor={'#fff'}
    borderColor={'crimson'}
    textColor={'#0D0113'}
    handlePress={() => {}}
  />
```

#### Props

| Prop        | Type     | Optional | Default   | Description                    |
| ----------- | -------- | -------- | --------- | ------------------------------ |
| text        | string   | No       | 'Button'  | Button text                    |
| disabled    | bool     | Yes      | false     | Disabled button                |
| bgColor     | string   | Yes      | '#0D0113' | Background color of the button |
| borderColor | string   | Yes      | '#0D0113' | Border color of the button     |
| textColor   | string   | Yes      | '#fff'    | Button text color              |
| handlePress | function | Yes      |           | Handle button press            |

### Checkbox and Radio

#### Usage

```
  <Checkbox
    variant={'circle'}
    value={false}
    handleChange={() => {}}
    checkboxStyle={{}}
    hasGradient={true}
  />
```

#### Props

| Prop          | Type                | Optional | Default  | Description              |
| ------------- | ------------------- | -------- | -------- | ------------------------ |
| variant       | 'square'\| 'circle' | Yes      | 'square' | Checkbox or radio        |
| value         | bool                | No       |          | Default status           |
| checkboxStyle | ViewStyle           | Yes      | {}       | Checkbox container style |
| hasGradient   | bool                | Yes      | false    | Gradient background      |
| handleChange  | function            | Yes      |          | Handle checkbox press    |

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

| Prop                | Type                              | Optional | Default | Description                              |
| ------------------- | --------------------------------- | -------- | ------- | ---------------------------------------- |
| label               | string                            | Yes      |         | Label for floating input                 |
| disabled            | bool                              | Yes      |         | Input disabled                           |
| inputType           | string                            | Yes      |         | Keyboard input type                      |
| inputStatus         | 'success' \| 'error' \| 'default' | Yes      |         | Border color change as per Input status  |
| inputContainerStyle | ViewStyle                         | Yes      |         | Additional Input container style         |
| inputTextStyle      | TextStyle                         | Yes      |         | Additional Input Text style              |
| message             | string                            | Yes      |         | Message below Input field for validation |
| onFocus             | function                          | Yes      |         | Handle Input onFocus                     |
| textInputProps      | object                            | Yes      |         | Additional Text Input props              |
| hasMessageIcon      | bool                              | Yes      | true    | Whether to show icon for message         |
| isMessageRight      | bool                              | Yes      | false   | Align message to left or right           |

### Onboard

#### Usage

```
  <Onboard
    logo={() => (
      <View
        style={{
          marginTop: EStyleSheet.value('3rem'),
          marginBottom: EStyleSheet.value('4rem'),
        }}>
        <Text>Logo</Text>
      </View>
    )}
    slides={[
      {
        image: 'https://picsum.photos/id/10/300',
        slideText: 'Instant Member Pricing &\nSpecial Offers',
      },
      {
        image: 'https://picsum.photos/id/12/300',
        slideText: 'Be Rewarded with Special\nOffers and Birthday Bonuses',
      },
      {
        image: 'https://picsum.photos/id/20/300',
        slideText: 'Join Reward me',
      },
    ]}
    sliderContainerStyle={{height: '55%'}}
    sliderTextStyle={{lineHeight: 25}}
    defaultText={
      'Sign in or create your account to start\nreceiving amazing benefits.'
    }
    defaultTextStyle={{
      lineHeight: 20,
      marginTop: 5,
      marginBottom: 20,
    }}
    // renderPagination={() => {}}
    // paginationStyle={{position: 'absolute', top: 105, right: 38}}
    button={() => (
      <View style={{marginBottom: 25}}>
        <Button text={'Join Now'} />
      </View>
    )}
    loginOption={() => (
      <View style={{flexDirection: 'row'}}>
        <Text>Already a Member? </Text>
        <Text
          style={{
            fontWeight: '600',
            textDecorationLine: 'underline',
          }}>
          Login
        </Text>
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
| sliderTextStyle      | TextStyle                                | Yes      |         | Additional slider text style                       |
| defaultText          | string                                   | Yes      |         | Default text below slider                          |
| defaultTextStyle     | TextStyle                                | Yes      |         | Additional default text style                      |
| renderPagination     | function                                 | Yes      |         | Function to render Custom Pagination (JSX)         |
| paginationStyle      | ViewStyle                                | Yes      |         | Additional pagination style for default pagination |
| button               | function                                 | Yes      |         | Function to render custom CTA button(JSX)          |
| loginOption          | function                                 | Yes      |         | Function to render custom login option(JSX)        |

### Otp Input

#### Usage

```
  <OtpInput
    key={uuidv4()}
    ref={ref}
    value={item.toString()}
    textInputFocus={() => {}}
    textInputBlur={() => {}}
    onChangeText={(text) => handleChange(index, text)}
    onSubmitEditing={() => handleJumpCursor(index, "next")}
    onKeyPress={(nativeEvent) => goBack(index)}
  />
```

#### Props

| Prop            | Type                              | Optional | Default   | Description                                 |
| --------------- | --------------------------------- | -------- | --------- | ------------------------------------------- |
| value           | string                            | No       |           | Otp input value                             |
| textInputFocus  | function                          | No       |           | Function to handle otp input focus          |
| textInputBlur   | function                          | No       |           | Function to handle otp input blur           |
| onSubmitEditing | function                          | Yes      |           | Function to handle otp text submit          |
| onChangeText    | function                          | Yes      |           | Handle otp input text change                |
| onKeyPress      | function                          | Yes      |           | Handle Keyboard key press                   |
| inputStatusType | "success" \| "error" \| "default" | Yes      | 'default' | Otp input border change as per input status |

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

## Contribute

1. Create stories in '/storybook/stories'
2. Create components for the stories
3. Load newly created story by running
   `npm run prestorybook`

Note: `npm run storybook` runs prestorybook to load all stories too
