import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './category.styles'
import { useSelector } from 'react-redux';
import ItemCategories from './itemCategory/itemCategory.component';

const Category = () => {
  const { categoriesList } = useSelector(state => state.staticData);
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesList}
        keyExtractor={(item) => item.id}
        key={1}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) =>
          <ItemCategories

          />
        }
      />
    </View>
  )
}

export default Category