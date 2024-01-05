import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import styles from './itemCategory.styles'

const ItemCategory = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => item.filterWithCategory(item.item.id)}
      style={[styles.productWithCategory(item.lastIndex, item.index), { backgroundColor: item.item.isSelectCategory ? '#489969' : null }]}
      key={item.item.id}
    >
      <Text style={styles.categoryText(item.item.isSelectCategory)}>{item.item.categoryName}</Text>
    </TouchableOpacity>
  )
}

const isMemo = (prveProps, nextProps) => {
  if (prveProps.item.item == nextProps.item.item) return true;
  else return false;
}
export default memo(ItemCategory, isMemo);