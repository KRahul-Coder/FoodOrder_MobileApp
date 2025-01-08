import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View,Image } from 'react-native';


// const product=products[0];
//this is aproduct component and we uses prop here to share data between componenets
const ProductListItem=( {product}) => {
  return(
    <View style={styles.container}>
    <Image source={{uri:product.image}} style={styles.image}/>

    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
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
    backgroundColor:'white',
    padding:10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  image:{
    width:'100%',
    aspectRatio: 1,
  },
  price:{
    color: Colors.light.tint,
    fontWeight:'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
