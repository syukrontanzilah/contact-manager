import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILUser } from '../asset'
import { colors } from '../utils/colors'

const ProfileMe = ({name,}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrap}>
                <Image source={ILUser} style={styles.image} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default ProfileMe

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:20
    },
    imageWrap: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 / 2
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },
    name: {
        fontSize: 22,
        color: colors.white,
        marginTop:5
    }
})
