// import React from 'react';

// const App = () => {
//   return <></>;
// };

// export default App;

import 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {LogBox} from 'react-native';

EStyleSheet.build({});

LogBox.ignoreLogs(['EventEmitter.removeListener']);

export {default} from './src/storybook';
