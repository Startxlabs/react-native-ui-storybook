// import React from 'react';

// const App = () => {
//   return <></>;
// };

// export default App;

import 'react-native-gesture-handler';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

export {default} from './src/storybook';
