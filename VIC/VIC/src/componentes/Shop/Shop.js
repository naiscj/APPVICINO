import React from 'react';
import { View, StyleSheet } from 'react-native';
import Products from '../Products/Products';
import { DataProvider } from '../Context/DataContext';

const Shop = () => {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Products />
      </View>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Shop;