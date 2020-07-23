import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ButtonFloat, Gaf, List, ProfileMe, SearchItem } from '../component'
import { colors, container } from '../utils'


const Home = ({ navigation }) => {
    return (
        <View style={container.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll}>
                <Gaf height={50} />

                <ProfileMe name="Alwi Assegaff" />
                <SearchItem onPress={()=> navigation.navigate('Search')}/>
                <View style={styles.content}>
                    <List onPress={()=>navigation.navigate('Profile')}/>
                    <List />
                    <List />
                    <List />

                    <Gaf height={20} />
                </View>

            </ScrollView>

            <ButtonFloat
                onPress={() => navigation.navigate('AddContact')} />

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
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingTop: 10,
        marginBottom:100

    }
})
