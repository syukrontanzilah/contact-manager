import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Gaf, List, ProfileMe, SearchItem, ButtonFloat } from '../component'
import { colors } from '../utils/colors'

const Home = () => {
    return (
        <View style={styles.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}>
                <ProfileMe name="Alwi Assegaff" />
                <SearchItem />
                <View style={styles.content}>
                    <List />
                    <List />
                    <List />
                    <List />
                    <Gaf height={1000} />
                </View>

            </ScrollView>

            <ButtonFloat />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.bckg
    },
    scroll: {
        flex: 1
    },
    content: {
        backgroundColor: colors.desc,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingTop: 10

    }
})
