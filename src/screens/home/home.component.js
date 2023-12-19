import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from '../../components/carousel/Carousel';
import styles from './home.styles';
import Icon from 'react-native-vector-icons/Ionicons'
import Item from '../item/item.component';
import Search from '../../components/search/search.component';
import data, { productCategory, productData } from '../../../data';

const Home = ({ navigation }) => {
    const [isIconRight, setIsIconRight] = useState(false)
    const [newProductCategory, setNewProductCategory] = useState(productCategory)
    const [productDataFiltered, setProductDataFiltered] = useState(productData)

    const filterWithCategory = (idCategory) => {
        productCategory.forEach(item => {
            if (item.id === idCategory) item.isSelectCategory = true
            else item.isSelectCategory = false
        });

        setNewProductCategory(productCategory)
        if (idCategory === 1) {
            setProductDataFiltered([...productData])
        } else {
            const newProductData = productData.filter(item => item.idCategory === idCategory)
            setProductDataFiltered(newProductData)
        }
    }

    const onChangeText = (value) => {
        if (value) {
            setIsIconRight(true)
        } else {
            setIsIconRight(false)
        }
    }

    return (
        <>
            <Text style={styles.textHome}>Trang chủ</Text>
            {/* Search and Drawer */}
            <View style={styles.searchAndDrawer}>
                <Search
                    onChangeText={onChangeText}
                    iconRight={isIconRight}
                />

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
                    <Carousel data={data} />
                </View>

                <View style={styles.preferentialProducts}>
                    <Text style={styles.text}>Sản phẩm ưu đãi</Text>
                    <TouchableOpacity>
                        <Text style={styles.textSeeAll}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <FlatList
                        data={productData}
                        renderItem={({ item }) =>
                            <View style={styles.containerItem}>
                                <Item
                                    item={item}
                                />
                            </View>
                        }
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
                    {productCategory.filter(item => item.id !== 1).map((item) => (
                        <TouchableOpacity
                            style={styles.itemCategory}
                            key={item.id}
                        >
                            <Image
                                source={item.image} style={styles.imageCategory}
                            />
                            <Text style={styles.categoryName}>{item.categoryName}</Text>
                        </TouchableOpacity>
                    ))}
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
                    {newProductCategory.map((item) => (
                        <TouchableOpacity
                            onPress={() => filterWithCategory(item.id)}
                            style={[styles.productWithCategory, { backgroundColor: item.isSelectCategory ? '#489969' : null }]}
                            key={item.id}
                        >
                            <Text style={{ color: item.isSelectCategory ? 'white' : 'black', fontWeight: 500 }}>{item.categoryName}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.itemWithCategory}>
                    <FlatList
                        data={productDataFiltered}
                        renderItem={({ item }) =>
                            <View style={styles.containerItem}>
                                <Item
                                    item={item}
                                />
                            </View>
                        }
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default Home