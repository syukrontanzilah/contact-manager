import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBack } from '../asset'
import Input from '../component/Input'
import { colors, container } from '../utils'

const Edit = ({ navigation }) => {
    return (
        <View style={container.page}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.header}>
                    <IconBack />
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>

                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}>
                    <View style={styles.content}>
                        <Input
                            label="Nama" />
                        <Input
                            icon="phone"
                            label="No Telepon" />
                        <Input
                            icon="home"
                            label="Alamat" />

                        <TouchableOpacity style={styles.hapus}>
                            <Text style={styles.textHapus}>Hapus kontak</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>

            <View style={styles.wrapButton}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.button}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.button}>Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Edit

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    edit: {
        color: colors.white,
        fontSize: 20,
        marginLeft: 10
    },
    content: {
        width: '100%',
        backgroundColor: colors.desc,
        padding: 20,
        borderRadius: 30,
        marginTop: 50,
        marginBottom:100
    },
    hapus: {
        backgroundColor: colors.secondary,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 40,
        marginBottom: 30,
        width: '50%',
        alignSelf: 'center'
    },
    textHapus: {
        color: colors.white,
        fontSize: 16
    },
    wrapButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,

    },
    button: {
        color: colors.float,
        fontSize: 18
    }
})
