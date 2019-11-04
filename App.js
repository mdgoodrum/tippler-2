import React from 'react';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {mapping, light, dark} from '@eva-design/eva';
import {Home} from './components/Home';

const themes = {light, dark};

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={themes[theme]}>
      <Home toggleTheme={toggleTheme} />
    </ApplicationProvider>
  );
};

export default App;
