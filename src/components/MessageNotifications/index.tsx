import React from "react";
import { View, Text } from "react-native";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

function index (){
    return(
        <View style ={{height:40,backgroundColor:"#2C2C2C", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <View style={{flexDirection:"row", marginLeft:10,alignItems:"center"}}>
            <MaterialCommunityIcons name="message-processing" size={24} color="#6c757d" />
                <Text style={{color:"white",marginLeft:10}}>
                    Mesaj Bildirimlerini Aç
                </Text>

            </View>
            <Entypo name="chevron-right" size={24} color="#6c757d" />
        </View>
    )
}

export default index