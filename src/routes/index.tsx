import {
  RootTabParamList,
  screenOptions,
} from '@/common/component/elements/screenOptions';
import {Home} from '@/features/dashboard/home';
import {Order} from '@/features/dashboard/order';
import {Profile} from '@/features/dashboard/profile';
import {Search} from '@/features/dashboard/search';
import {Trend} from '@/features/dashboard/trend';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

export function AppRouter() {
  const Tab = createBottomTabNavigator<RootTabParamList>();
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Trend"
        component={Trend}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
