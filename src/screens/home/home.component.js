import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/carousel/Carousel';
import styles from './home.styles';
import Icon from 'react-native-vector-icons/Ionicons'
import Item from '../item/item.component';
import Search from '../../components/search/search.component';
import data, { productCategory, productData } from '../../../data';
import { getBannersThunk, getCategoriesThunk, getProductsByCategoryThunk, getProductsThunk, updateCategories } from '../../redux/home/home.slice';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  const { banners } = useSelector(state => state.home);
  const { products } = useSelector(state => state.home);
  const { saleProducts } = useSelector(state => state.home);
  const { popularProducts } = useSelector(state => state.home);
  const { categories } = useSelector(state => state.home);
  const { productsByCategory } = useSelector(state => state.home);


  const [arrayCategories, setArrayCategories] = useState([])
  const [productDataFiltered, setProductDataFiltered] = useState(productData);


  // useLayoutEffect(() => {
  //   setNewArrayCategories([...array])
  // }, [categories])

  useEffect(() => {
    // setNewArrayCategories([...array])
    getData();
  }, [])

  const getData = async () => {
    await dispatch(getBannersThunk());
    await dispatch(getProductsThunk('sale'));
    await dispatch(getProductsThunk('popular'));

    await dispatch(getCategoriesThunk());

    await dispatch(getProductsThunk('popular'));

  }

  const filterWithCategory = (idCategory) => {
    // categories.forEach(item => {
    //   if (item.id === idCategory) {
    //     item.isSelectCategory = true;
    //   } else {
    //     item.isSelectCategory = false;
    //   }
    // });
    dispatch(updateCategories(idCategory))

    dispatch(getProductsByCategoryThunk(idCategory));
  }

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
        <View style={styles.carousel}>
          <Carousel data={banners} />
        </View>

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
        // style={{ marginHorizontal: 15 }}
        >
          {categories.map((item, index) => {
            const lastIndex = categories.length - 1
            return (
              <TouchableOpacity
                style={[styles.itemCategory(lastIndex, index)]}
                key={item.id}
              >
                {item.image && <Image
                  source={{ uri: item.image }} style={styles.imageCategory}
                />}
                <Text style={styles.categoryName}>{item.categoryName}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

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
        </View>
      </ScrollView >
    </>
  )
}

export default Home;