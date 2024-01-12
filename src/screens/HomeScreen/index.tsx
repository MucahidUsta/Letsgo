import React, {useState,useEffect} from "react";
import {ScrollView} from "react-native"
import productassets from "../../../assets/product";
import { products } from "../../models";
import FavoriteProducts from "../../components/FavoriteProduct"
import MainProducts from "../../components/MainProducts"
import CategoryFilter from "../../components/CategoryFilter"
import MessageNotifications from "../../components/MessageNotifications"
function index(){

    const [product, setProducts]= useState <products[]>([])
    useEffect(()=> {
        setProducts(productassets)
    },[])


    return(
       <ScrollView style={{backgroundColor:"white", height:"100%"}}>
        <MessageNotifications/>
        <CategoryFilter/>
        <FavoriteProducts/>
        <MainProducts mainProducts={product} filtered={false} header={"Beykoz"}/>
       </ScrollView>
    )
}

export default index

