import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/carousel/Carousel';
import styles from './home.styles';
import Icon from 'react-native-vector-icons/Ionicons'
import Item from '../item/item.component';
import Search from '../../components/search/search.component';
import { getBannersThunk, getCategoriesListThunk, getCategoriesThunk, getProductsByCategoryThunk, getProductsThunk, updateCategories } from '../../redux/home/home.slice';
import ProductsByCategory from './productsByCategory/productsByCategory.component';

const Home = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);
  // const banners = useSelector(state => state.home.banners);
  // const { banners } = useSelector(state => state.staticData);

  const saleProducts = useSelector(state => state.home.saleProducts);
  const popularProducts = useSelector(state => state.home.popularProducts);
  const categoriesList = useSelector(state => state.home.categoriesList);

  // useEffect(() => {
  //   getInitData();
  // }, [])

  // const getInitData = async () => {
  //   await dispatch(getBannersThunk());
  //   await dispatch(getProductsThunk('sale'));
  //   await dispatch(getProductsThunk('popular'));

  //   await dispatch(getCategoriesListThunk());


  // }

  return (
    <>
      <Text style={styles.textHome}>Trang chủ</Text>
      {/* Search and Drawer */}
      <View style={styles.searchAndDrawer}>
        <Search />

        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}>
          <Icon
            name={'menu-outline'}
            size={35}
            color='#081a2b'
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* <View style={styles.carousel}>
          <Carousel data={banners} />
        </View> */}

        <View style={styles.preferentialProducts}>
          <Text style={styles.text}>Sản phẩm ưu đãi</Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={saleProducts.slice(0, 5)}
            renderItem={({ item, index }) => {
              const lastIndex = saleProducts.slice(0, 5).length - 1
              return (
                <View style={styles.containerItem(lastIndex, index)}>
                  <Item
                    item={item}
                  />
                </View>
              )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.preferentialProducts}>
          <Text style={styles.text}>Sản phẩm phổ biến</Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View >
          <FlatList
            data={popularProducts.slice(0, 5)}
            renderItem={({ item, index }) => {
              const lastIndex = popularProducts.slice(0, 5).length - 1
              return (
                <View style={styles.containerItem(lastIndex, index)}>
                  <Item
                    item={item}
                  />
                </View>
              )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.preferentialProducts}>
          <Text style={styles.text}>Danh mục sản phẩm </Text>
          <TouchableOpacity>
            <Text style={styles.textSeeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categoriesList.filter(item => item.id !== -1).map((item, index) => {
            const lastIndex = categoriesList.filter(item => item.id !== -1).length - 1
            return (
              <TouchableOpacity
                style={[styles.itemCategory(lastIndex, index)]}
                key={item.id}
              >
                <Image
                  source={{ uri: item.image }} style={styles.imageCategory}
                />
                <Text style={styles.categoryName}>{item.categoryName}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        <ProductsByCategory
        />
      </ScrollView >
    </>
  )
}

export default Home;