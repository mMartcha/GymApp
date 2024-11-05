import { GymContextProvider } from '@/context/GymContext';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GymContextProvider>

      <Stack screenOptions={{headerShown:false}}>

        <Stack.Screen
          name='index'
        />
        <Stack.Screen
          name='(stack)/sign/index'
        />

        <Stack.Screen
          name='(stack)/create/index'
        />

      </Stack>
    </GymContextProvider>

  );
}
