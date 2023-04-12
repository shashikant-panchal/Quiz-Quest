import { useNavigation, NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import MyStack from './navigation/indexnav';


const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
  }
});

export default App;

