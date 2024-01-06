import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import styles from './itemCategory.styles'

const ItemCategory = ({
  item,
  lastIndex,
  index,
  filterWithCategory
}) => {
  console.log('render ItemCategory');
  return (
    <TouchableOpacity
      onPress={() => filterWithCategory(item.id)}
      style={[styles.productWithCategory(lastIndex, index), { backgroundColor: item.isSelectCategory ? '#489969' : null }]}
      key={item.id}
    >
      <Text style={styles.categoryText(item.isSelectCategory)}>{item.categoryName}</Text>
    </TouchableOpacity>
  )
}

const isMemo = (prveProps, nextProps) => {
  if (prveProps.item === nextProps.item) return true;
  else return false;
}
export default memo(ItemCategory, isMemo);