import { AppRegistry } from 'react-native';
import App from './src/index';

AppRegistry.registerComponent('peanutWIFI', () => App);

console.ignoredYellowBox = ['Warning: isMounted(...) is deprecated in plain JavaScript React classes. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.'];
