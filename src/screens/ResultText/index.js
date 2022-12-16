import React from "react";
import { View, StyleSheet, Text,Image,ScrollView} from "react-native";

const ResultText =()=>{
    return(
       <ScrollView>
        <View style={{flexDirection:'row',marginTop:20}}>
        <Image source={require('./result1.png')}
         style={{width: 50, height: 70,borderRadius:10/2,marginLeft:24}}/>
         <Text style={{marginLeft:15,fontSize:18,color:"black"}}>
            Geosite Tebat Rasau 
            </Text>
            <Text style={{position:"absolute",marginLeft:90,marginTop:22,fontSize:12}}>
                Wisata Air
            </Text>
            <Text style={{position:"absolute",marginLeft:90,marginTop:45,fontSize:12,color:"black",fontSize:12}}>
                Jalan K.A. Bujang,Batu Penyu,Blitung Timur ...
            </Text>
        </View>
        <Text style={{marginLeft:12,marginRight:12,marginTop:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
         <View style={{flexDirection:'row',marginTop:20}}>
        <Image source={require('./result2.png')}
         style={{width: 50, height: 70,borderRadius:10/2,marginLeft:24}}/>
         <Text style={{marginLeft:15,fontSize:18,color:"black"}}>
            Geosite Gunong Lumut
            </Text>
            <Text style={{position:"absolute",marginLeft:90,marginTop:22,fontSize:12}}>
                Wisata Air
            </Text>
            <Text style={{position:"absolute",marginLeft:90,marginTop:45,fontSize:12,color:"black",fontSize:12}}>
                Jalan K.A. Bujang,Batu Penyu,Blitung Timur ...
            </Text>
        </View>
       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default ResultText