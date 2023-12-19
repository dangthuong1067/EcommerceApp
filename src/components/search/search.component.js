import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './search.styles'
import Icon from 'react-native-vector-icons/Ionicons'
const Search = () => {
  const [isIconRight, setIsIconRight] = useState(false)

  const onChangeText = (value) => {
    if (value) {
      setIsIconRight(true)
    } else {
      setIsIconRight(false)
    }
  }
  return (
    <View style={styles.container}>
      <Icon
        name={'search-outline'}
        size={22}
        color='#a2a1a7'
      />
      <TextInput
        placeholder='Search'
        style={{ flex: 1 }}
        onChangeText={onChangeText}
      />
      {isIconRight &&
        <TouchableOpacity>
          <Icon
            name={'close-circle-outline'}
            size={22}
            color='#737373'
          />
        </TouchableOpacity>}

    </View>
  )
}

export default Search