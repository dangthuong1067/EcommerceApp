import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../../components/checkbox/checkbox.component'

const Category = () => {
    const [isCheck, setIsCheck] = useState(false)

    const [isCheck1, setIsCheck1] = useState(false)
    const onPress = () => {
        setIsCheck(!isCheck)
    }

    const onPress1 = () => {
        // setIsCheck(!isCheck)
        setIsCheck1(!isCheck1)
    }


    return (
        <View>
            <CheckBox
                label={"Test"}
                onPress={onPress}
                isCheck={isCheck}
            />
            <CheckBox
                label={"Lưu"}
                onPress={onPress1}
                isCheck={isCheck1}
            />
        </View>
    )
}

export default Category