import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { formatCurrency } from '../../helpers/Utils';
import styles from './item.styles';
const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.discount}>
        <Text style={styles.textDiscount}><Text style={styles.percent}>10%</Text> GIẢM GIÁ</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.capacity}>{item.capacity}</Text>

        <View style={styles.priceAndAddCart}>
          <View>
            <Text style={styles.price}>{formatCurrency(item.price)}</Text>
            <Text style={styles.reducedPrice}>{formatCurrency(item.reducedPrice)}</Text>
          </View>

          <TouchableOpacity style={styles.addCart}>
            <Text style={styles.textAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default Item


