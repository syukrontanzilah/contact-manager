import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { container, colors } from '../utils'
import { Gaf } from '../component'
import { ILUser2, ILUser, IconAdd, IconCamera, IconEmail, IconPhone, IconPhoneGreen, IconMessage, IconStar, IconWA } from '../asset'

const Profile = () => {
    return (
        <View style={container.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}
            >
                <View style={styles.profileWrap}>
                    <Image
                        style={styles.image}
                        source={ILUser2} />
                    <View style={{ alignItems: 'center', marginVertical: 20 }}>
                        <Text style={styles.name}>Hana abdullah</Text>
                        <Text style={styles.nomor}>08963566466445</Text>
                    </View>
                    <View style={styles.iconWrap}>
                        <IconPhoneGreen />
                        <IconMessage />
                        <IconWA style={{ height: 20, width: 20 }} />
                        <IconStar />
                    </View>
                </View>
                <Gaf height={20} />


                <View style={styles.descWrap}>
                    <Text style={styles.label}>Nama:</Text>
                    <Text style={styles.desc}>Hana Abdullah</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.desc}>Hanaabdullah123@gmail.com</Text>

                    <Text style={styles.label}>Alamat:</Text>
                    <Text style={styles.desc}>Jl. Kembang Kuning Palagan Pahlawan</Text>

                </View>

                <Gaf height={100} />
            </ScrollView>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    profileWrap: {
        height: 540,
        width: '100%',
        backgroundColor: colors.desc,
        borderRadius: 30,

    },
    image: {
        height: 400,
        width: '100%',
        borderRadius: 30
    },
    descWrap: {
        // height: 200,
        width: '100%',
        borderRadius: 30,
        backgroundColor: colors.desc,
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    name: {
        fontSize: 25,
        color: colors.white
    },
    nomor: {
        fontSize: 14,
        color: colors.secondary
    },
    iconWrap: {
        flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10
    },
    label: {
        fontSize: 14,
        color: colors.secondary
    },
    desc: {
        fontSize: 16,
        color: colors.white
    }
})
