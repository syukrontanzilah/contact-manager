import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconEdit, IconKodeQR, IconShare } from '../asset'
import { colors } from '../utils'

const BottomTab = ({onPress1, onPress2, onPress3}) => {
    return (
        <View style={styles.page}>
            <TouchableOpacity 
            onPress ={onPress1} style={styles.tab}>
                <IconKodeQR />
                <Text style={styles.text}>Kode QR</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onPress2}
            style={styles.tab}>
                <IconEdit />
                <Text style={styles.text}>Ubah</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={onPress3}
            style={styles.tab}>
                <IconShare />
                <Text style={styles.text}>Berbagi</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    page: {
        height: 70,
        flexDirection: 'row'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        color: colors.white,
        marginTop:5
    }
})
