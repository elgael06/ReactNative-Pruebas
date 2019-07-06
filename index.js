/**
 * @format
 */

import {
    AppRegistry
} from 'react-native';
import Index from './src/scripts/App';
import {
    name as appName
} from './app.json';

AppRegistry.registerComponent(appName, () => Index);