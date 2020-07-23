import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
import { IconSearch } from '../asset'

const SearchItem = ({onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress = {onPress}
            style={styles.touch}>
                <IconSearch />
            </TouchableOpacity>

        </View>
    )
}

export default SearchItem

const styles = StyleSheet.create({
    container: {
        // backgroundColor: colors.secondary,
        height: 60,
        borderRadius: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 30
    },
    touch: {
        height: 50,
        width: 50,
        backgroundColor: colors.bckg,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50 / 2
    }
})
