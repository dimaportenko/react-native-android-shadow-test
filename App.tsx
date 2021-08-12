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
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ShadowBox} from './src/native/shadow';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{backgroundColor: 'purple'}}>
        <Text>TEst</Text>
      </View>
      <View style={{padding: 20}}>
        {/*<ShadowBox style={{}}>*/}
        {/*  <Text>TEst</Text>*/}
        {/*</ShadowBox>*/}
      </View>
      <View style={{padding: 20}}>
        <ShadowBox style={{...styles.shadow, backgroundColor: 'gray'}}>
          <Text>TEst</Text>
        </ShadowBox>
      </View>
      <View style={{padding: 20}}>
        <ShadowBox style={[{backgroundColor: 'red'}, styles.shadow1]}>
          <Text>TEst</Text>
        </ShadowBox>
      </View>
      <View style={{padding: 20}}>
        <ShadowBox style={[{backgroundColor: 'pink'}, styles.shadow2]}>
          <Text>TEst</Text>
        </ShadowBox>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },
  shadow1: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.65,
  },
  shadow2: {
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.65,
  },
});

export default App;
