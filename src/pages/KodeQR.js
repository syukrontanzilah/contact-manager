import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { container, colors } from '../utils'
import { IconQRBlack, ILUser, IconBack, ILUser2 } from '../asset'

const KodeQR = ({navigation}) => {
    return (
        <View style={container.page}>
            <TouchableOpacity 
            onPress={()=> navigation.goBack()}
            style={styles.header}>
                <IconBack />
                <Text style={styles.kode}>Kode QR</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.profile}>
                        <Image source={ILUser2}
                            style={styles.image} />
                    </View>
                    <Text style={styles.nama}>Hana Abdullah</Text>
                </View>
                <View>
                    <View style={styles.wrap}>
                        <IconQRBlack />
                    </View>
                    <Text style={styles.text}>Pindai kode QR ini untuk menambahkan informasi kontak ini ke Kontak</Text>
                </View>
            </View>

        </View>
    )
}

export default KodeQR

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems:'center',
        marginTop:20,
        marginLeft:20
    },
    kode: {
        color: colors.white,
        fontSize: 20,
        marginLeft:10
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    profile: {
        height: 100,
        width: 100, backgroundColor: 'wheat',
        borderRadius: 100 / 2
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },
    nama: {
        fontSize: 30,
        color: colors.white,
        marginTop: 20,

    },
    wrap: {
        height: 150,
        width: 150,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 30
    },
    text: {
        color: colors.white,
        fontSize: 15,
        maxWidth: '70%',
        textAlign: 'center'

    }
})
