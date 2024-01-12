import React, {useState,useEffect} from "react";
import {View,ScrollView,Text} from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import productassets from "../../../assets/product";
import { products } from "../../models";
import FavoriteProductItem from "../../components/FavoriteProductItem"
import styles from "./styles";
function index(){

    const [product, setProducts]= useState <products[]>([])
    useEffect(()=> {
        setProducts(productassets)
    },[])


    return(
        <View style={styles.productsContainer}>
            {/*render header*/}
            <View style={styles.titleProducts}>
                <Text style={styles.topicTitle}>
                Vitrin İlanları
                </Text>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={styles.detailTitle}>Hepsini gör</Text>
                <AntDesign name="right" size={20} color="#F24E61" />
                </View>
            </View>
            {/* render Favorite products*/}
                
              <ScrollView
              bounces={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
                    {product.map((item)=>{
                        return <FavoriteProductItem prodType="favorite" key={item.id} product={item}/>
                    })}
                 
              </ScrollView>
                
        </View>
    )
}

export default index





