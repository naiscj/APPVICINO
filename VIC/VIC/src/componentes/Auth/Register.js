import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>Formulario de Registro</Text>
      {/* Aquí puedes agregar el formulario de registro */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;