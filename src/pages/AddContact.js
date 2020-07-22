import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { colors, container } from '../utils'
import { IconCamera } from '../asset/icon'
import { Gaf, Input } from '../component'

const AddContact = () => {
    return (
        <View style={container.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}>
                <Gaf height={100} />
                <View style={styles.content}>
                    <TouchableOpacity style={styles.addPhoto}>
                        <IconCamera />
                    </TouchableOpacity>

                    <View>
                        <Input label="Nama" />
                        <Input label="No Telepon" />
                        <Input label="Email" />
                    </View>

                </View>
            </ScrollView>

            <View style={styles.wrapButton}>
                <TouchableOpacity>
                     <Text style={styles.button}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                     <Text style={styles.button}>Simpan</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AddContact

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.desc,
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 50,

    },
    scroll: {
        flex: 1
    },
    addPhoto: {
        backgroundColor: 'violet',
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: -50

    },
    wrapButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    button: {
        color: colors.float,
        fontSize: 18
    }
})
