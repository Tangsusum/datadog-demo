/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { vexo } from 'vexo-analytics';
vexo('YOUR_API_KEY');

AppRegistry.registerComponent(appName, () => App);
