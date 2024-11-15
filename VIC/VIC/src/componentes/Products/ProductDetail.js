import React, { useState } from 'react'; // Importa useState
import { StyleSheet, View, Text, Image, Button, ScrollView  } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProductDetail = ({ route }) => {
  const { product } = route.params; // Obtén el producto de los parámetros de la ruta
  const [selectedSize, setSelectedSize] = useState("S"); // Inicializa el estado para selectedSize

  return (
    <ScrollView style={styles.container}>
      <Image source={product.img} style={styles.productImage} />
      <Text style={styles.seasonText}>Nueva temporada</Text>
      <Text style={styles.productName}>{product.productName}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Picker
        selectedValue={selectedSize}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedSize(itemValue)}>
        <Picker.Item label="S" value="S" />
        <Picker.Item label="M" value="M" />
        <Picker.Item label="L" value="L" />
      </Picker>
      <Button style={styles.bcompra}
        title="Agregar al carrito"
        onPress={() => alert('Producto agregado al carrito')}
      />
      <Text style={styles.deliveryText}>Entrega estimada: el día que llegue el camión</Text>
      <View style={styles.iconContainer}>
		
        <Text>🛒</Text>

        <Text>VICINO</Text>

        <Text>👤</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e2caad',
  },
  productImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  seasonText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
  productName: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  productPrice: {
    color: 'green',
    fontSize: 18,
	paddingTop:5,
  },
  picker: {
	marginBottom:10,
	borderRadius: 10,
    height: 200,
    width: 355,
    marginTop: 15,
  },
  bcompra:{
		marginTop:0,
		borderRadius: 50,
		padding: 10,
  },
  deliveryText: {
    marginTop: 30,
    fontSize: 16,
    color: '#888',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
});

export default ProductDetail;