import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILUser, ILUser2 } from '../asset'
import { colors } from '../utils/colors'

const List = ({onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container}>
            <View style={styles.wrap}>
                <Image source={ILUser2} style={styles.image} />
            </View>
            <View style={styles.textWrap}>
                <Text style={styles.name}>Hana nisa</Text>
                <Text style={styles.desc}>085123457876</Text>
            </View>

        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1

    },
    wrap: {
        height: 60,
        width: 60,
        // borderRadius: 55 / 2,
        // backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2
    },
    textWrap: {
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        flex: 1,
        paddingBottom: 12,
        paddingLeft:10
    },
    name: {
        fontSize: 18,
        color: colors.white,
        textTransform:'capitalize'
    },
    desc: {
        fontSize: 12,
        color: colors.secondary
    }
})
