import {  View, FlatList} from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() { //getting the info here and sharing to prop
  return (
    <View>
      {/* <ProductListItem product={products[4]}/>
      <ProductListItem product={products[1]}/>  first approach to retrieve items */}

      <FlatList 
      data={products}
      renderItem={({item}) => <ProductListItem product={item}/>}
      numColumns={2} //to create 2 columns
      contentContainerStyle ={{gap:10,padding:10}} //used to create gap between rows
      columnWrapperStyle={{ gap:10 }} //used to create gap between columns


      />
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


