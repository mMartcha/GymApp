import { GymContextProvider } from '@/context/GymContext';
import { theme } from '@/global/theme';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';
import { FadeIn } from 'react-native-reanimated';

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
      <Tabs screenOptions={{
        headerShown:false, 
        tabBarActiveTintColor: theme.colors.green500,
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:theme.colors.gray600,
          
          
          
        }
        }}>
        
        <Tabs.Screen
        name='home/index'
        options={{
          title:'Home',
          tabBarIcon:({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
        />

        <Tabs.Screen
        name='history/index'
        options={{
          title:'Historico',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
        }}
        />

        <Tabs.Screen
        name='profile/index'
        options={{
          title:'Perfil',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-circle-outline" color={color} />,
        }}
        />

        <Tabs.Screen
        name='home/[exerciseScreen]'
        options={{
          tabBarButton:() => null,    //DEIXA O ICON INDESEJADO DO TAB INVISIVEL E CENTRALIZA
          title:'Exercicio',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-circle-outline" color={theme.colors.gray600}
          
          />,
        }}
        />

       

      </Tabs>
    </GymContextProvider>
  );
}
