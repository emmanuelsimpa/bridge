import {RouteProp} from '@react-navigation/native';
import {House, Search, LucideIcon} from 'lucide-react-native';
import {Ordersvg} from '@/assests/svgs/orderSVG';
import {Profilesvg} from '@/assests/svgs/profileSVG';
import {Trendsvg} from '@/assests/svgs/trendSVG';
import React from 'react';

type TabIconComponent =
  | LucideIcon
  | (({color}: {color: string}) => React.ReactNode);

type TabIconMap = {
  Home: TabIconComponent;
  Search: TabIconComponent;
  Trend: TabIconComponent;
  Order: TabIconComponent;
  Profile: TabIconComponent;
};

const TAB_ICON: TabIconMap = {
  Home: House,
  Search: Search,
  Trend: Trendsvg,
  Order: Ordersvg,
  Profile: Profilesvg,
};

// Type the route parameter
export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Trend: undefined;
  Order: undefined;
  Profile: undefined;
};

export const screenOptions = ({
  route,
}: {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
}) => ({
  tabBarIcon: ({color, size}: {color: string; size: number}) => {
    const IconComponent: any = TAB_ICON[route.name];

    if (typeof IconComponent === 'function') {
      return IconComponent({color});
    }

    return <IconComponent color={color} size={size} />;
  },
  tabBarActiveTintColor: '#12AF37',
  tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.56)',
  tabBarStyle: {
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
});
