import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './radio-button.styles'

const RadioButton = ({ name, radio }) => {
    const [isCheckRadio1, setIsCheckRadio1] = useState(false);
    const [isCheckRadio2, setIsCheckRadio2] = useState(false);

    const handleSelectOption = () => {
        if (isCheckRadio1 && radio == "radio1") {
            setIsCheckRadio1(false)
        } else if (!isCheckRadio1 && radio == "radio1") {
            setIsCheckRadio1(true)
        }
        else if (isCheckRadio2 && radio == "radio2") {
            setIsCheckRadio2(false)
        }
        else if (!isCheckRadio2 && radio == "radio2") {
            setIsCheckRadio2(true)
        }
    };
    return (
        <TouchableOpacity style={styles.container}
            onPress={handleSelectOption}
        >
            <View
                style={styles.radioButton}
            >
                {isCheckRadio1 && radio == "radio1" ? <View style={styles.radioInner} />
                    : isCheckRadio2 && radio == "radio2" ? <View style={styles.radioInner} /> : null}
            </View>
            <Text style={styles.label}>{name}</Text>
        </TouchableOpacity>
    )
}

export default RadioButton