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
import {ShadowView} from './src/native/shadow';

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
        <ShadowView style={{...styles.shadow, backgroundColor: 'gray'}}>
          <Text>TEst</Text>
        </ShadowView>
      </View>
      <View style={{padding: 20}}>
        <ShadowView style={[{backgroundColor: 'red'}, styles.shadow1]}>
          <Text>TEst</Text>
        </ShadowView>
      </View>
      <View style={{padding: 20}}>
        <ShadowView style={[{backgroundColor: 'pink'}, styles.shadow2]}>
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
    shadowOpacity: 0.4,
    shadowRadius: 5.65,
  },
});

export default App;
