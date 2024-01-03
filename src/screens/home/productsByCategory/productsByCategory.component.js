import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './productsByCategory.styles';
import Item from '../../item/item.component';
import { getProductsByCategoryThunk, updateCategories } from '../../../redux/home/home.slice';

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.home.categories);
  const productsByCategory = useSelector(state => state.home.productsByCategory);
  const flatListRef = useRef(null);

  const getInitData = () => {
    dispatch(getProductsByCategoryThunk());
  }

  useEffect(() => {
    getInitData();
  }, [])

  const filterWithCategory = (idCategory) => {
    dispatch(updateCategories(idCategory));
    idCategory === -1 ? dispatch(getProductsByCategoryThunk()) : dispatch(getProductsByCategoryThunk(idCategory));
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }

  return (
    <>
      <View style={styles.preferentialProducts}>
        <Text style={styles.text}>Sản phẩm theo danh mục</Text>
        <TouchableOpacity>
          <Text style={styles.textSeeAll}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item, index) => {
          const lastIndex = categories.length - 1
          return (
            <TouchableOpacity
              onPress={() => filterWithCategory(item.id, categories)}
              style={[styles.productWithCategory(lastIndex, index), { backgroundColor: item.isSelectCategory ? '#489969' : null }]}
              key={item.id}
            >
              <Text style={{ color: item.isSelectCategory ? 'white' : 'black', fontWeight: 500 }}>{item.categoryName}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      <View style={styles.itemWithCategory}>
        <FlatList
          ref={flatListRef}
          data={productsByCategory}
          renderItem={({ item, index }) => {
            const lastIndex = productsByCategory.length - 1
            return (
              <View style={styles.containerItem(lastIndex, index)}>
                <Item
                  item={item}
                />
              </View>
            )
          }
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View></>
  )
}

export default ProductsByCategory