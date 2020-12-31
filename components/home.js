import React, { Component } from 'react';
import { PROFILES } from '../shared/profiles';
import { Text, Dimensions, Image, StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Avatar, Tile } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    child: {
        height: height * 1,
        width,
        justifyContent: 'center',
    },
    agetext: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'
    },
});

const { width, height } = Dimensions.get('window');

const Home = () => {
    return (
        <SwiperFlatList>
            {
                PROFILES.map((profile) => {
                    return (

                        <View style={styles.container}>
                            <Image source={profile.image} style={{ width: width * 1, height: height * 0.75 }} />
                            <View style={{ position: 'absolute', fontSize: 75, alignSelf: 'center', margin: 45 }}><Text style={{ fontSize: 50, color: 'white' }}>{profile.firstname}</Text></View>
                            <View style={{ flex: 1, flexDirection: 'row', }}>

                                <Text style={{ flexDirection: 'column', fontSize: 20, width: '50%', marginRight: 50, marginLeft: 5 }}>Age: {profile.age}</Text>
                                <Text style={{ flexDirection: 'column', fontSize: 20, }}>{profile.location}</Text>
                            </View>

                        </View>
                    )
                })
            }
        </SwiperFlatList>
    )
}







export default Home;