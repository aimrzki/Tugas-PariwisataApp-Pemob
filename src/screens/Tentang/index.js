import React from "react";
import { View, StyleSheet, Text,Image,ScrollView} from "react-native";

const Tentang =()=>{
    return(
       <ScrollView style={{backgroundColor:'white'}}>
        <Text style={{fontSize:24,marginLeft:15,marginTop:20,color:"black",fontWeight:"bold"}}>
            Inspiring Belitung Timur, 
        </Text>
        <Text style={{fontSize:24,marginLeft:15,color:"black",fontWeight:"bold"}}>
            the land of maritime
        </Text>
        <Text style={{fontSize:24,marginLeft:15,color:"black",fontWeight:"bold"}}>
            Spices route
        </Text>
        <Text style={{fontSize:14,marginTop:15,marginLeft:15,color:'black'}}>
            Aplikasi Inspiring Belitung Timur, memudahkan
        </Text>
        <Text style={{fontSize:14,marginLeft:15,color:'black'}}>
            untuk menemukan wisata-wisata di Kabupaten
        </Text>
        <Text style={{fontSize:14,marginLeft:15,color:'black'}}>
            Belitung Timur
        </Text>
        <Text style={{fontSize:14,marginTop:15,marginLeft:15,color:'black'}}>
            Sistem Informasi dan Konten Promosi Multimedia
        </Text>
        <Text style={{fontSize:14,marginLeft:15,color:'black'}}>
            Dinas Kebudayaan dan Pariwisata Kabupaten
        </Text>
        <Text style={{fontSize:14,marginLeft:15,color:'black'}}>
            Belitung Timur 2021.
        </Text>
       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default Tentang