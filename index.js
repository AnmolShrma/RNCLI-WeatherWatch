/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs(true || __DEV__);
console.reportErrorsAsExceptions = false;
AppRegistry.registerComponent(appName, () => App);
