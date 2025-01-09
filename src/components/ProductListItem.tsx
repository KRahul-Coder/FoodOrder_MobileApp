import Colors from '@/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router'; //used to link between multiple screens
import { Pressable } from 'react-native'; //give us pressable option 

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = { //used to define the type of he variables, we use props for it
  product: Product
}

// const product=products[0];
//this is aproduct component and we uses prop here to share data between componenets
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

//this is for retrieving one product item from the productlist
// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Image source={{uri:product.image}} style={styles.image}/>

//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.price}>${product.price}</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1, //means share the space between 2 siblings 
    maxWidth: '50%', //take not more than 50%
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
