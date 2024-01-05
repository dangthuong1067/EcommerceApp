import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './productsByCategory.styles';
import Item from '../../item/item.component';
import { getCategoriesThunk, getProductsByCategoryThunk, loadingProduct, updateCategories } from '../../../redux/home/home.slice';
import ItemCategory from './itemCategory/itemCategory.component';

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const { loading, categories } = useSelector(state => state.home.productsByCategories);
  const productsByCategory = useSelector(state => state.home.productsByCategory);
  const flatListRef = useRef(null);

  const getInitData = () => {
    dispatch(getCategoriesThunk());
    dispatch(getProductsByCategoryThunk());
  }

  useEffect(() => {
    getInitData();
  }, [])

  const filterWithCategory = (idCategory) => {
    dispatch(loadingProduct(true));
    dispatch(updateCategories(idCategory));
    if (idCategory === -1) {
      dispatch(getProductsByCategoryThunk());
    } else {
      dispatch(getProductsByCategoryThunk(idCategory));
    }
    flatListRef.current.scrollToOffset({ offset: 0 });
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
            <ItemCategory
              item={{
                item,
                lastIndex,
                index,
                filterWithCategory
              }}
            />
          )
        })}
      </ScrollView>

      <View style={styles.itemWithCategory}>
        {loading &&
          <View style={styles.viewLoading}>
            <ActivityIndicator size="small" color="#00ff00" />
          </View>
        }
        <FlatList
          ref={flatListRef}
          data={productsByCategory}
          keyExtractor={item => item.id}
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
      </View>
    </>
  )
}

export default ProductsByCategory