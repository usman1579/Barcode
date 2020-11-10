
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { Heading } from './Component/Styles';
import { PD } from './Component/Words';
import { ScrollView } from 'react-native-gesture-handler';
import { Api } from './Component/Api';
import { SubHeading } from './Component/Button';

export default function ItemDetail({ route }) {

    const {type , data} = route.params;
    const { response, setresponse } = useState('')
    const { Loading, setLoading } = useState(false)


    useEffect(async () => {
        fetchProduct();
    }, [])

    const fetchProduct = () => {
        fetch(`${Api}${data}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(val => {
                    setresponse(val)
                    setLoading(true)
            }).catch(err => {
                alert('error :', err)
            })
    }

    return (
        <View style={styles.container}>

            <Text style={Heading}>
                {PD}
            </Text>

            <View style={styles.Box}>

                {Loading ?
                    <ScrollView>

                        <Image
                            style={styles.image}
                            source={{ uri: response.image_url }}
                        />
                        <SubHeading
                            SubHeading='Type'
                            value={type}
                        />

                        <SubHeading
                            SubHeading='Code'
                            value={data}
                        />

                        <SubHeading
                            SubHeading='Class'
                            value={response.class}
                        />

                        <SubHeading
                            SubHeading='Company'
                            value={response.status}
                        />

                        <SubHeading
                            SubHeading='Description'
                            value={response.description}
                        />

                    </ScrollView>
                    :
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                }


            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: '90%',
        height: 300,
        alignSelf: 'center',
        flex: 1
    },
    image: {
        alignSelf: 'center', 
        height: 50, 
        width: 50
    }
});

