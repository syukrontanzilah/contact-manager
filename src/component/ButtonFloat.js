import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconAdd } from '../asset'
import { colors } from '../utils/colors'

const ButtonFloat = ({onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container}>
           <IconAdd/>
        </TouchableOpacity>
    )
}

export default ButtonFloat

const styles = StyleSheet.create({
    container:{
        height:65,
        width:65,
        backgroundColor:  colors.float, 
        borderRadius:65/2,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:30,
        right:30
    }
})
