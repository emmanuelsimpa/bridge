import {queryClient} from '@/lib/react-query';
import {QueryClientProvider} from '@tanstack/react-query';
import React, {PropsWithChildren} from 'react';
import {PaperProvider} from 'react-native-paper';
import {theme} from './theme';
import {NavigationContainer} from '@react-navigation/native';

export function AppProvider({children}: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
