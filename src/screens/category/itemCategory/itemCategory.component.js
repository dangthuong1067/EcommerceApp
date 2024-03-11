import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const ItemCategory = ({ itemCategory }) => {
  return (
    <View style={{
      backgroundColor: 'red',
      width: width,
    }}>
      <Text>{itemCategory.categoryName}</Text>
      <Image
        source={{ uri: itemCategory.image }} style={{ width: 50, height: 50 }}
      />
    </View>
  )
}

export default ItemCategory