/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
   AppRegistry,
   StyleSheet,
   NavigatorIOS,
   Text,
   View
} from 'react-native';
import Main from './App/components/main'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

const marvelcatalog = () => {
  return (
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        backButtonTitle: 'Back',
        title: "Marvel Characters Catalog",
        component: Main
      }} />
  )
}

AppRegistry.registerComponent('marvelcatalog', () => marvelcatalog);
