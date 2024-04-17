import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../config/Colors';

const AppRoute = () => {
    return (
        <View style={styles.container}>
            
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 121,
    backgroundColor: Colors.primary,
    borderBottomStartRadius: 25,
  },
});

export default AppRoute;