import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, container } from '../utils'

const AddContact = () => {
    return (
        <View style={container.page}>

            <View style={styles.content}>
                <Text>AddContact</Text>
            </View>
        </View>
    )
}

export default AddContact

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.desc,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingTop: 10

    }
})
