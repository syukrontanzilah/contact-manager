import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../utils'
import { IconSmile } from '../asset'

const Input = ({ label }) => {
    const [border, setBorder] = useState(colors.secondary)
    const onFocusForm = () => {
        setBorder(colors.float)
    }
    const onBlurForm = () => {
        setBorder(colors.secondary)
    }
    return (
        <View style={styles.container}>
            <View style={styles.labelWrap}>
                <IconSmile />
                <Text style={styles.label}>{label}</Text>
            </View>

            <TextInput
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                // placeholder="Nama"
                // placeholderTextColor={colors.secondary}
                style={styles.input(border)}
            />
        </View>
    )
}


export default Input

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    labelWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: colors.secondary,
        fontSize: 18,
        marginLeft: 10
    },
    input: (border) => ({
        color: colors.float,
        borderBottomColor: border,
        borderBottomWidth: 1,
        fontSize: 18,
        marginLeft: 25,
        marginRight: 10
    })
})
