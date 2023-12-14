import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './checkbox.styles'
import Icon from 'react-native-vector-icons/Ionicons'

const CheckBox = ({ name }) => {
    const [isCheck, setIsCheck] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => setIsCheck(!isCheck)}
            style={styles.container}>
            <View style={styles.circle}>
                <Icon
                    name={isCheck ? 'checkmark-outline' : null}
                    size={15}
                    color='black'
                />
            </View>
            <Text style={{ fontSize: 18 }}>{name}</Text>
        </TouchableOpacity>
    )
}

export default CheckBox