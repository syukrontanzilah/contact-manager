import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
import { IconAdd } from '../asset'

const ButtonFloat = () => {
    return (
        <TouchableOpacity style={styles.container}>
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
