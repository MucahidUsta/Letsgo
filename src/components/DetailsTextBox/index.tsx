import React from "react";
import { Text, View } from "react-native";
import {FontAwesome, AntDesign,MaterialIcons} from "@expo/vector-icons"


function index ({price,name,description}: {price:number,name:string,description:string}) {
    return(
        <View>
            <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                 <View style={{flexDirection:"row", alignItems:"center"}}>
                    <FontAwesome name="turkish-lira" size={24} color="black"/>
                    <Text style={{fontSize:30,fontWeight:"bold"}}>{price}</Text>
               </View>
                    <View style={{width:42,height:42,backgroundColor:"#f1f1f1",flexDirection:"row", alignItems:"center", justifyContent:"center",borderRadius:28}}>
                        <AntDesign name="heart" size={21} color="#9E9E9E"/>
                    </View>
            </View>
            <Text style={{fontSize:22,fontWeight:"600", marginTop:5}}>{name}</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center", marginTop:20}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <MaterialIcons 
                    name="local-fire-department"
                    size={20}
                    color="#ff3e55"/>
                    <Text style={{color:"#ff3e55"}}>53 dk</Text>
                   </View>  
                   <View style={{flexDirection:"row", alignItems:"center",width:"18%",backgroundColor:"#f3f3f3", paddingHorizontal:7,justifyContent:"space-around",paddingVertical:4,borderRadius:12}}>
                    <AntDesign name="eye" size={18} color="#9e9e9e" />
                   <Text style={{color:"#9e9e9e"}}>14</Text>
                    </View>
            </View>
            <Text style={{marginTop:30}}>
                {description}
            </Text>
        </View>
    )
}

export default index