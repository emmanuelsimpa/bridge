import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import React from 'react';

export const Header = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};
