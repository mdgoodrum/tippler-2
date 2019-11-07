import React from 'react';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {mapping, light, dark} from '@eva-design/eva';
import {Home} from './components/Home';
import {RadioButton} from './components/RadioButton';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

const themes = {light, dark};

const optionsGender = [
  {
    key: 'male',
    text: 'Male',
  },
  {
    key: 'female',
    text: 'Female',
  },
];

const optionsFood = [
  {
    key: 'no',
    text: 'No',
  },
  {
    key: 'yes',
    text: 'YES',
  },
];

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ApplicationProvider mapping={mapping} theme={themes[theme]}>
        <Text>Gender:</Text>
        <RadioButton options={optionsGender} />
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <Text>Have you eaten?</Text>
        <RadioButton options={optionsFood} />
      </ApplicationProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
