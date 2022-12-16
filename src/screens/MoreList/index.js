import React from "react";
import { View, StyleSheet, Text,Image,ScrollView} from "react-native";

const MoreList =()=>{
    return(
       <ScrollView style={{backgroundColor:"white"}}>
        <View>
        <Image source={require('./Gambar9.png')}
         style={{width: 114, height: 48,marginTop:25,marginLeft:10}} />
         <Image source={require('./Gambar10.png')}
         style={{width: 48, height: 56,marginTop:25,marginLeft:315,position:"absolute"}} />
        </View>
        <View>
        <Text style={{marginTop:10}}>
            --------------------------------------------------------------------------------------------------
         </Text>
         <Text style={{color:'black',marginLeft:12,marginTop:10,fontSize:14}}>
            Tentang
         </Text>
        </View>
        <View>
        <Text style={{marginTop:10}}>
            --------------------------------------------------------------------------------------------------
         </Text>
         <Text style={{color:'black',marginLeft:12,marginTop:10,fontSize:14}}>
            Favorit Destinasi
         </Text>
        </View>
        <View>
        <Text style={{marginTop:10}}>
            --------------------------------------------------------------------------------------------------
         </Text>
         <Text style={{color:'black',marginLeft:12,marginTop:10,fontSize:14}}>
            Kritik dan Saran
         </Text>
        </View>
        <View>
        <Text style={{marginTop:10}}>
            --------------------------------------------------------------------------------------------------
         </Text>
         <Text style={{color:'black',marginLeft:12,marginTop:10,fontSize:14}}>
            Nilai Aplikasi
         </Text>
         <Text style={{marginTop:10}}>
            --------------------------------------------------------------------------------------------------
         </Text>
        </View>
        <View>
            <Text style={{marginTop:40,marginLeft:140,fontSize:12,color:'grey'}}>
                App Version 1.0
            </Text>
        </View>
        <View>
            <Text style={{marginTop:13,marginLeft:135,fontSize:12}}>
                Hak Cipta © 2021
            </Text>
        </View>
        <View>
            <Text style={{marginTop:-1,marginLeft:60,fontSize:12,color:'black'}}>
                Dinas Kebudayaan Dan Pariwisata Belitung Timur
            </Text>
        </View>
        <View>
            <Text style={{marginTop:12,marginLeft:105,fontSize:12,color:'#1e90ff'}}>
                www.disbudpar.beltim.go.id
            </Text>
        </View>
       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default MoreList