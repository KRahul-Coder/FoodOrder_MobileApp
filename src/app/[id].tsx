import { StyleSheet, Text, View, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ProductDetailScreen = () => {

    const { id } = useLocalSearchParams(); //this is a hook from expo router

    return (
        <View>
            <Text style={{ fontSize: 20 }} >ProductDetailScreen for id: {id} </Text>
        </View>
    )
}

export default ProductDetailScreen