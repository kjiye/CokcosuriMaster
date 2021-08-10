/**
 * @format
 */

import 'dayjs/locale/ko';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
dayjs.locale('ko');

AppRegistry.registerComponent(appName, () => App);
