import { StyleSheet,Dimensions } from "react-native";

const {height,width}= Dimensions.get("window")
const styles = StyleSheet.create({
scrollStyle:{
    height:height*0.09,
    marginBottom:22,
    marginTop:20

},
center:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:12
},
image:{
    width:56,
    height:56,
    borderRadius:30
}

})

export default styles
