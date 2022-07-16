import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Feed from './screens/Feed';
import ArticleFull from './screens/ArticleFull';
import NewPost from './screens/NewPost';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [loaded] = useFonts({
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Article" component={ArticleFull} />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
};

export default App;
