import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    favorite:{
        width:width*0.29
    },
    favoriteView:{
        width:width*0.27,height:width*0.27
    },
    favoriteImage:{
        width:width*0.26,
        height:width*0.26,
        borderRadius:10,
        right:-10
    },
    labeledFav:{
        transform:[{rotate:"45deg"}],
        position:"absolute",
        right:-20,
        top:12,
        paddingVertical:3,
        paddingHorizontal:20,
        backgroundColor:"white"
    },
    //-------
    main:{
        width:width*0.46,
        height:width*0.46,
        alignItems:"center"
       
    },
    mainView:{
       width:width*0.44,
       height:width*0.44
    },
    mainImg:{
        width:width*0.44,
       height:width*0.44,
       borderRadius:12
        
    }
})
export default styles