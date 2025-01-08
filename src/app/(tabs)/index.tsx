import {  View } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() { //getting the info here and sharing to prop
  return (
    <View>
      <ProductListItem product={products[0]}/>
      <ProductListItem product={products[1]}/>
    </View>
  );
}



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


