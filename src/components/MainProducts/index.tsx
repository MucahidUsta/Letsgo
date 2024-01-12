import React from "react";
import { View,Text } from "react-native";
import {products} from "../../models"
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import FavoriteProductItem from "../FavoriteProductItem"
type mainProductsProps={
    mainProducts:products[];
    header:string;
    filtered:boolean
}

export default function index ({filtered,mainProducts, header}:mainProductsProps){
return(
    <View style={styles.productsContainer}>
        <View style={styles.titleProduct}>
            <Text style={ filtered ? styles.topicTitleFiltered : styles.topicTitle}>
                       {header}                       
            </Text>
               { !filtered && <View style={{flexDirection:"row"}}>
                    <Text style={styles.detailTitle}>
                        
                        Düzelt
                    </Text>
                    <AntDesign name="right" size={20} color="#F24E61"  />
                </View>}
          </View>
          <View style={styles.listContainer}>
            { mainProducts.map((item)=>{
                return(
                    <FavoriteProductItem prodType="main" key={item.id} product={item}/>
                )
            })  }
          </View>
    </View>
)
}