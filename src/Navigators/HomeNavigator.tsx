import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import { Image, SafeAreaView, TextInput, TouchableOpacity,Text,View } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import {FontAwesome5, Ionicons,Entypo} from "@expo/vector-icons"
import { useNavigation, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ProductDetailsScreen from "../screens/ProductDetailsScreen"

const Stack = createStackNavigator()

const MainHeaderComponent = () => {
    return(
    <SafeAreaView style={{flexDirection:"row", alignItems:"center", width:"90%", marginHorizontal:"5%", marginTop:"8%", marginBottom:"4%"}}>
        <TouchableOpacity>
            <Image style={{width:38,height:38,borderRadius:20}} source={{uri: "https://www.looper.com/img/gallery/why-the-professor-from-money-heist-looks-so-familiar/intro-1587390568.jpg"}}/>
        </TouchableOpacity>
        <TextInput 
        placeholder="Ara"
        style={{backgroundColor:"#e5e5e5",flex:1,marginHorizontal:10,height:35,borderRadius:10,paddingLeft:"32%"}}/>
        <Text style={{color :"#FF1840", fontSize:18}}>Filtrele</Text>
    </SafeAreaView>
)}
const CategoryHeaderComponent = ({}) => {
    
    return(
    <SafeAreaView style={{flexDirection:"row", alignItems:"center", width:"90%", marginHorizontal:"5%", marginTop:"8%", marginBottom:"4%"}}>
        <TouchableOpacity >
           <FontAwesome5 
                name="arrow-left"
                size={24}
                color="#989898"
           />
        </TouchableOpacity>
        <TextInput 
        placeholder="Ara"
        style={{backgroundColor:"#e5e5e5",flex:1,marginHorizontal:10,height:35,borderRadius:10,paddingLeft:"32%"}}/>
        <Text style={{color :"#FF1840", fontSize:18}}>Filtrele (1)</Text>
    </SafeAreaView>
)}

function MyStack({navigation,route}) {
    const tabHiddenRoutes = ["ProductDetails"];

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log("Route Name is ",routeName)
        if(tabHiddenRoutes.includes(routeName)){
          navigation.setOptions({tabBarStyle: {display:'none'}});
        }else {
          console.log("Aç ",routeName)
            navigation.setOptions({tabBarStyle: {display:'true'}});
        }
    }, [navigation, route]);


  
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{header:() => (<MainHeaderComponent />)}}/>
            
            <Stack.Screen 
            
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                   headerTransparent:true,
                    headerRight:() =>(
                        <View style = {{marginRight:15,backgroundColor:'#919191', height:30, width:30,flexDirection:"row", justifyContent:"center", borderRadius:18, alignItems:"center"}}>
                                <Ionicons name="ios-arrow-redo-sharp" size={24} color="white" />
                        </View>
                    ),
                    headerLeft:()=>(
                        <TouchableOpacity onPress={() => navigation.goBack()} style ={{marginLeft:15,backgroundColor:'#919191', height:30, width:30,flexDirection:"row", justifyContent:"center", borderRadius:18, alignItems:"center"}}>
                            <Entypo name="cross" size={28}  color="white" />
                        </TouchableOpacity>
                    ),
                    headerTitle:() =>(null)
                }}
            
            
            />

             <Stack.Screen 
            name="CategoryFiltering"
            component={CategoryFilterScreen}
            options={{header:() => (<CategoryHeaderComponent
            />)}}/>
            
        </Stack.Navigator>
    )
}

export default function HomeNavigator({navigation,route})
{
    return <MyStack navigation={navigation} route={route}/>
}