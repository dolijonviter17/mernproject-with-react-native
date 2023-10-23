/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
PushNotification.configure({
    onRegister: function (token) {
        console.log("Tokens", token);
    },
    onNotification : function (notification)  {
        console.log('Notification', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData)
    },
    channelId : 'test',
    requestPermissions : Platform.OS === 'ios',
    permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    popInitialNotification : true
    
})
AppRegistry.registerComponent(appName, () => App);
