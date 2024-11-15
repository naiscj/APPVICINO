import React, { useContext } from 'react';
import { DataContext } from "../Context/DataContext.js";
import { Pressable, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
    const navigation = useNavigation(); // Obtén el objeto de navegación

    const { buyProducts } = useContext(DataContext); // Asegúrate de obtener buyProducts del contexto
    const productos = [
        {
            id: 1,
            productName: "Conjundo Candy",
            price: 1000,
            img: require("../../../assets/images/candyconjunto.jpg")
        },
        {
            id: 2,
            productName: "Conjunto Eco Andino",
            price: 1500,
            img: require("../../../assets/images/Conjuntoeco.jpg")
        },
        {
            id: 3,
            productName: "Tacones Devil",
            price: 2000,
            img: require("../../../assets/images/Tacones.jpg")
        },
        {
            id: 4,
            productName: "Vestido Bright",
            price: 2500,
            img: require("../../../assets/images/VestidoBright.jpg")
        },
        {
            id: 5,
            productName: "Reloj Sideris",
            price: 20500,
            img: require("../../../assets/images/Relojsideris.jpg")
        },
        {
            id: 6,
            productName: "Alianzas Glass",
            price: 20500,
            img: require("../../../assets/images/alianzasGlass.jpg")
        },
        {
            id: 7,
            productName: "Anillo Penny",
            price: 20500,
            img: require("../../../assets/images/anilloPenny.jpg")
        },
        {
            id: 8,
            productName: "Aros Tiana",
            price: 20500,
            img: require("../../../assets/images/arosTiana.jpg")
        },
    ];

    const handleBuyPress = (product) => {
        buyProducts(product); // Usa buyProducts directamente desde el contexto
    };

    /*
	const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };
	*/

    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                        <View style={styles.productItem}>
                            <Image source={item.img} style={styles.productImage} />
                            <Text style={styles.productName}>{item.productName}</Text>
                            <Text style={styles.productPrice}>$ {item.price}</Text>
                            <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}>
                                <Text style={styles.buyButtonText}>Comprar</Text>
                            </Pressable>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
 columnWrapperStyle={styles.row}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9c2a7',
    },
    productItem: {
        flex: 1,
        margin: 10,
        borderBottomWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 9,
        paddingTop: 2,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    productImage: {
        width: '100%',
        height: 110,
        resizeMode: 'contain',
    },
    productName: {
        marginTop: 10,
        fontWeight: 'bold',
        color: "black",
    },
    productPrice: {
        color: 'green',
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buyButton: {
        backgroundColor: "#000",
        padding: 8,
        width: 150,
        marginTop: 28,
        borderRadius: 50,
    },
    buyButtonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});

export default Products;