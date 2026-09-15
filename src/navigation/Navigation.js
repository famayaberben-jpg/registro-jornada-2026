import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import HistorialScreen from '../screens/HistorialScreen';
import AgregarJornadaScreen from '../screens/AgregarJornadaScreen';
import EstadisticasScreen from '../screens/EstadisticasScreen';
import ExportarScreen from '../screens/ExportarScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreenTab" component={HomeScreen} />
      <Stack.Screen
        name="AgregarJornada"
        component={AgregarJornadaScreen}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="EditarJornada"
        component={AgregarJornadaScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}

function HistorialStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistorialScreenTab" component={HistorialScreen} />
      <Stack.Screen
        name="EditarJornadaFromHistorial"
        component={AgregarJornadaScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E8E8E8',
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="Historial"
        component={HistorialStack}
        options={{
          tabBarLabel: 'Historial',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📋</Text>,
        }}
      />
      <Tab.Screen
        name="Estadisticas"
        component={EstadisticasScreen}
        options={{
          tabBarLabel: 'Estadísticas',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📊</Text>,
        }}
      />
      <Tab.Screen
        name="Exportar"
        component={ExportarScreen}
        options={{
          tabBarLabel: 'Exportar',
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>📥</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
