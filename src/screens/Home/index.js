import React from "react";
import { View, StyleSheet, Text,Image,ScrollView,TouchableOpacity} from "react-native";

const Home =({navigation})=>{
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <Image source={require('./wisata1.png')}
         style={{width: 400, height: 360}} />
         <Text style={{color:'black',fontWeight:'500',fontSize:25,marginTop:18,marginLeft:15}}>
            Geosite Gunong Lumut
         </Text>
         <Text style={{marginLeft:15,marginTop:5}}>
            Wisata Alam
         </Text>
         <Text style={{color:'black',marginLeft:15,marginTop:10,fontWeight:'400'}}>
            Descriptions it is a long established fact that a render will be distracted by the readable content of a page when looking at its layout
         </Text>
         <Text style={{marginLeft:10,marginRight:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
         <Text style={{marginLeft:15}}>
            Telepone
         </Text>
         <Text style={{marginLeft:15,marginTop:2,fontWeight:'400',color:'black',fontSize:17}}>
            0812-3456-7890
         </Text>
         <Text style={{marginLeft:15,marginTop:10}}>
            Instagram
         </Text>
         <Text style={{marginLeft:15,marginTop:2,fontWeight:'400',color:'black',fontSize:17}}>
            gunonglumut
         </Text>
         <Text style={{marginLeft:10,marginRight:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
         <Text style={{marginLeft:15,marginTop:10}}>
            Galeri
         </Text>
         <ScrollView style={{marginLeft:17,marginRight:17,flexDirection:'row',marginTop:5}}>
         <Image source={require('./wisata.png')}
         style={{width: 350, height: 60,borderRadius:10/2}} />
         </ScrollView>
         <Text style={{marginLeft:10,marginRight:10,marginTop:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
         <Text style={{marginLeft:15,marginTop:10}}>
            Lokasi
         </Text>
         <Text style={{marginLeft:15,color:'black'}}>
            Kec.Kelapa Sampit,Kab.Belitung Timur,Mayang,Klp.Kampit
         </Text>
         <View>
         <Image source={require('./maps.png')}
         style={{width: 401, height: 206,marginTop:20}} />
         <TouchableOpacity
            onPress={()=> navigation.navigate('Maps')} 
            style={{
                height:50,
                backgroundColor:'#1e90ff',
                paddingVertical:10,
                width:200,
                justifyContent:'center',
                alignItems:'center',
                marginLeft:110,
                position: "absolute",
                marginTop:145,
                borderRadius:10/2,
                }}>
                <Text style={{color:'white'}}>Arahkan ke Lokasi</Text>
            </TouchableOpacity>
            <Image source={require('./MapsLogo.png')}
            style={{width: 50, height: 50,borderRadius:10/2,position:"absolute",marginTop:80,marginLeft:180}} />
         </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default Home