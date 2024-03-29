import React from 'react'
import {View,Image,Text} from "react-native"
import {AntDesign,FontAwesome,Feather} from "@expo/vector-icons"


function index({averageRating}:{averageRating:number}) {
  return (
   <View style={{marginTop:22,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
                <Image style={{height:46,width:46,borderRadius:23}} source={{uri:"https://static.thenounproject.com/png/363633-200.png"}} />
                <AntDesign 
                    name="checkcircle"
                    color="#A6CC71"
                    size={14}
                    style={{position:'absolute',bottom:1,right:1}}
                />
            </View>
            <View style={{marginLeft:12}}>
                <Text style={{fontWeight:'bold',fontSize:15}}>Muco</Text>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:3}}>
                    {[0,0,0,0,0].map((el,i)=> (
                        <FontAwesome
                            key={i}
                            name="star"
                            size={16}
                            color={i<Math.floor(averageRating) ? "#FFD200":"#DFDFDF"  }
                            style={{marginRight:2}}
                        />
                    ))}
                </View>
            </View>
       </View>
       <Feather name="chevron-right" size={28} color="gray" />

    </View>
  )
}


export default index