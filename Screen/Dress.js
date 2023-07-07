import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 
function Dress() {
    const [Dresses, SetDresses] = useState([
        {
            url:'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/vmuQKVIMlkS7rctnjfkFXw/dress_1_2x.png',
            price: 29.99,
            DressName:'Abigail Ruched Mini Dress - Jade',
            addWishlist: false,
            addCart: false,
        },
        {
            url:"https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/TtSPiXkV2EyBo8ld-9Be6g/dress_2_2x.png",
            price: 29.99,
            DressName:'Leilah Shirt Dress - Leopard',
            addWishlist: false,
            addCart: false,
        },
        {
            url:'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/jtkSbNtsLEeVStiioWpWlA/dress_3_2x.png',
            price: 29.99,
            DressName:'Dress 3',
            addWishlist: false,
            addCart: false,
        },
        {
            url:'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/xqCUdCyBxUi8fvPhPcyMiQ/dress_4_2x.png',
            price: 34.99,
            DressName:'Dress 4',
            addWishlist: false,
            addCart: false,
        },
        {
            url:'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/UUU7_hFttEmwO---3PY8mw/dress_5_2x.png',
            price: 34.99,
            DressName:'Dress 5',
            addWishlist: false,
            addCart: false,
        },
        {
            url:'https://cdn-eu.icons8.com/gB4NBrkEb0m7TxOo4wtFKg/VrHwJQpRckiYB_IhJbK6Jw/dress_6_2x.png',
            price: 24.99,
            DressName:'Dress 6',
            addWishlist: false,
            addCart: false,
        },
    ])

    return <View style={{
        flex : 1,
        backgroundColor : 'white',
        justifyContent: 'center',
        
    }}>
        <View></View>
        <ScrollView>
            <FlatList 
                data ={Dresses}
                numColumns={2}
                keyExtractor={item => item.DressName}
                renderItem={({item, index}) => <View style={{
                    flex :1 ,
                    width: '90%',
                    height: 330,
                    marginLeft: 10,
                    borderColor: 'white',
                    }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            style={{
                                width: 145,
                                height: 280,
                                resizeMode:'cover',
                                justifyContent: 'center',
                                marginLeft: 5,
                            }}
                            source={{
                                uri: item.url
                            }}
                            />
                    </View>
                    <View style={{flexDirection: 'row', padding: 10,}}>
                        <TouchableOpacity
                            onPress={() => {
                                let clonedDresses = Dresses.map(eachDresses => {
                                    if(item.DressName === eachDresses.DressName){
                                        return {...eachDresses, addWishlist : eachDresses.addWishlist == false || eachDresses.addWishlist == undefined ? true : false }
                                    }
                                    return eachDresses
                                })
                                SetDresses(clonedDresses)
                            }}
                            style={{flexDirection:'row'}}>
                            <Icon name = 'heart' size={10} color={item.addWishlist == undefined || item.addWishlist == false ? 'black' : 'red'}></Icon>
                            <Text style={{
                                color: item.addWishlist == undefined || item.addWishlist == false ? 'black' : 'red',
                                fontSize: 10,
                                marginRight: 7,
                            }}>Add to Wishlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                let clonedDresses = Dresses.map(eachDresses => {
                                    if(item.DressName === eachDresses.DressName){
                                        return {...eachDresses, addCart : eachDresses.addCart == false || eachDresses.addCart == undefined ? true : false }
                                    }
                                    return eachDresses
                                })
                                SetDresses(clonedDresses)
                            }}
                            style={{flexDirection:'row'}}>
                            <Icon name = 'shopping-cart' size={10} color={item.addCart == undefined || item.addCart == false ? 'black' : 'red'}></Icon>
                            <Text style={{
                                color: item.addCart == undefined || item.addCart == false ? 'black' : 'red',
                                fontSize: 10,
                                marginRight: 7,
                            }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>}
            />
        </ScrollView>
    </View>
}

export default Dress 