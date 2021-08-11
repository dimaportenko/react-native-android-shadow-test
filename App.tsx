/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// @ts-ignore
import {ShadowView} from './src/native/shadow';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
      <View style={{backgroundColor: 'purple'}}>
        <Text>TEst</Text>
      </View>
      <View style={{padding: 20}}>
        <ShadowView style={{}}>
          <Text>TEst</Text>
        </ShadowView>
      </View>
      <View style={{padding: 20}}>
        <ShadowView style={{...styles.shadow, backgroundColor: 'gray'}}>
          <Text>TEst</Text>
        </ShadowView>
      </View>
      <View style={{padding: 20}}>
        <ShadowView style={[{backgroundColor: 'red'}, styles.shadow]}>
          <Text>TEst</Text>
        </ShadowView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export default App;
