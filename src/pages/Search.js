import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { container, colors } from '../utils'
import { IconShare, IconSearch, IconBack } from '../asset'

const Search = ({navigation}) => {
    return (
        <View style={container.page}>
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder="Cari ..." />
                <TouchableOpacity
                style={{position: 'absolute', left: 25, top: 15}}
                onPress={()=>navigation.goBack()}>
                    <IconBack style={{  }} />
                </TouchableOpacity>
                <IconSearch style={{ position: 'absolute', right: 25, top: 15 }} />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    wrap: {
        height: 60,
        marginTop: 10
    },
    input: {
        backgroundColor: colors.desc,
        borderRadius: 30,
        fontSize: 18,
        paddingHorizontal: 50,
        color: colors.white,
        marginHorizontal: 5,


    }
})
