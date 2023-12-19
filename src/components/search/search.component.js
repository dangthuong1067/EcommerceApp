import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './search.styles'
import Icon from 'react-native-vector-icons/Ionicons'
const Search = ({ iconRight, onChangeText }) => {
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
            {iconRight &&
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