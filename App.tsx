import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { ActivityIndicator } from 'react-native';

import Routes from './src/routes';

export default function App() {
  // Copyright (c) 2013 by Andriy Konstantynov. All rights reserved. Visit http://www.onlinewebfonts.com
  const [fontsLoaded] = useFonts({
    'Espuma-Bold': require('./src/assets/fonts/Espuma-Bold.otf'),
    'Espuma-Regular': require('./src/assets/fonts/Espuma-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return <ActivityIndicator />;
  };

  return (
    <>
      <StatusBar translucent />
      <Routes />
    </>
  );
}
