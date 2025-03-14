import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import Button from '@/components/Button';


const sizes = ['S', 'M', 'L', 'XL'];



const ProductDetailScreen = () => {

    const { id } = useLocalSearchParams(); //this is a hook from expo router
    const product = products.find((p) => p.id.toString() == id);

    const [selectedSize, setSelectedSize] = useState('L');

    const addToCart = () => {
        console.warn('Adding to Cart, size: ', selectedSize);
    };

    if (!product) {
        return <Text>Product not Found!!</Text>
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />

            <Text>Select Size</Text>
            <View style={styles.sizes}>
                {sizes.map((size) => (
                    <Pressable
                        onPress={() => {
                            setSelectedSize(size);
                        }}
                        style={[
                            styles.size,
                            {
                                backgroundColor: selectedSize == size ? 'gainsboro' : 'white'
                            },
                        ]} key={size}>
                        <Text style={[styles.sizeText,
                        {
                            color: selectedSize == size ? 'black' : 'gray'
                        },
                        ]}>{size}</Text>
                    </Pressable>
                ))}
            </View>

            <Stack.Screen options={{ title: product?.name }} />
            <Text style={styles.price} > ${product.price} </Text>
            <Button onPress={addToCart} text="Add to Cart" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 'auto',
    },

    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    size: {
        backgroundColor: 'gainsboro',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    sizeText: {
        fontSize: 20,
        fontWeight: '500',
    },
});

export default ProductDetailScreen