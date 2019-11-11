import React from 'react';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {mapping, light, dark} from '@eva-design/eva';
// import {Home} from './components/Home';
import {RadioButton} from './components/RadioButton';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

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
  const [theme, setTheme] = React.useState('dark');
  const [weightValue, onChangeWeight] = React.useState('');
  const [wineValue, onChangeWine] = React.useState('');
  const [mixedDrinksValue, onChangeMixedDrinks] = React.useState('');
  const [shotsValue, onChangeShots] = React.useState('');
  const [beersValue, onChangeBeers] = React.useState('');

  // const toggleTheme = () => {
  //   const nextTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(nextTheme);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ApplicationProvider mapping={mapping} theme={themes[theme]}>
        <Text>Gender:</Text>
        <RadioButton options={optionsGender} />
        <View style={styles.view} />
        <Text>Have you eaten?</Text>
        <RadioButton options={optionsFood} />
        <TextInput
          style={styles.textField}
          onChangeText={text => onChangeWeight(text)}
          value={weightValue}
          placeholder="Enter your weight in lbs:"
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => onChangeWine(text)}
          value={wineValue}
          placeholder="Wine glasses drank:"
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => onChangeMixedDrinks(text)}
          value={mixedDrinksValue}
          placeholder="Mixed drinks destroyed:"
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => onChangeShots(text)}
          value={shotsValue}
          placeholder="Shots to the brain:"
        />
        <TextInput
          style={styles.textField}
          onChangeText={text => onChangeBeers(text)}
          value={beersValue}
          placeholder="Beers drank:"
        />
        <Text>Beer set to: 12oz, 5% abv</Text>
        <Text>Glass of wine set to: 5oz, 12% abv</Text>
        <Text>One shot set to: 1.5oz, 40% abv</Text>
        <Text>Mixed drink set to: 2 shots</Text>
        <Button
          title="Cheers!"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </ApplicationProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textField: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  view: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default App;
