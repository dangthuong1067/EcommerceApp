import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from './category.styles'
import Search from '../../components/search/search.component'
import ItemCategory from './itemCategory/itemCategory.component'
const { width } = Dimensions.get('window');
const Category = () => {
  const categories = [
    {
      id: 1,
      categoryName: 'SAMSUNG',
      image: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png",
      background: '#bac5c1',
    },
    {
      id: 2,
      categoryName: 'IPHONE',
      image: "https://w7.pngwing.com/pngs/664/673/png-transparent-apple-logo-iphone-computer-apple-logo-company-heart-logo.png",
      background: '#fdf6ec',
    },
    {
      id: 3,
      categoryName: 'VIVO',
      image: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/vivo-logo.png",
      background: '#fde8e5',
    },
    {
      id: 4,
      categoryName: 'XIAOMI',
      image: "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/07/18/xiaomi-logo.png",
      background: '#f4eaf5',
    },
    {
      id: 5,
      categoryName: 'OPPO',
      image: "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(3).png",
      background: '#b0b7bd',
    },
  ]
  return (
    <View style={styles.container}>
      <Text>Danh mục sản phẩm</Text>
      <View style={styles.category}>
        <FlatList
          data={categories}
          //key={(item)=>item.id}
          keyExtractor={(item) => item.id}
          //horizontal
          numColumns={2}
          renderItem={({ item }) =>
            <ItemCategory
              itemCategory={item}
            />}
        />
      </View>

    </View>
  )
}

export default Category