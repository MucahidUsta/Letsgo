import React,{useEffect,useState} from 'react'
import {View,FlatList,Text, ActivityIndicator} from "react-native"
import messageData from '../../../assets/messages'
import MessageItem from "../../components/MessagesItem"


function index() {
return(
  <View>
    <FlatList 
      data={messageData}
      renderItem={({item}) => <MessageItem item={item} />}
    
    />
  </View>
)


}

export default index