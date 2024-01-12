import React , {useEffect,useState} from 'react'
import {ScrollView} from "react-native"
import productassets from "../../../assets/product"
import {Category, products} from "../../models/index"
import MainProducts from "../../components/MainProducts"
import FilteringCategory from "../../components/FilterCategory"

import MessageNotification from "../../components/MessageNotifications"

function index(props) {
    const [products , setProducts] = useState<products[]>([])
    const [category, setCategory] = useState<Category>(props.route.params.category)
    useEffect(() => {
        setProducts(productassets)
    },[])
  return (
    <ScrollView style={{backgroundColor:'white',height:'100%'}}>
            <FilteringCategory category={category}/> 
           <MessageNotification />
           <MainProducts mainProducts={products} filtered={true} header={"Arama sonuçları (1041464)"} />

    </ScrollView>
    )
}

export default index