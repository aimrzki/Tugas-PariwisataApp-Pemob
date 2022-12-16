import React from "react";
import { View, StyleSheet, Text,Image,ScrollView,TouchableOpacity} from "react-native";

const Destinasi =()=>{
    return(
       <ScrollView>
        <View>
            <Text style={{marginTop:10,marginLeft:20,color:"#1e90ff"}}>
                Semua
            </Text>
            <Text style={{marginTop:10,marginLeft:100,color:"#1e90ff",position:"absolute"}}>
                Wisata Alam
            </Text>
            <Text style={{marginTop:10,marginLeft:220,color:"#1e90ff",position:"absolute"}}>
                Wisata Air
            </Text>
            <Text style={{marginTop:10,marginLeft:320,color:"#1e90ff",position:"absolute"}}>
                Wisata K
            </Text>
        </View>
        <View>
        <Image source={require('./Gambar1.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:30,marginTop:10}} />
         <Text style={{position:"absolute",fontSize:14,marginTop:120,marginLeft:35,color:"white"}}>
            Pantai Serdang
         </Text>
         <Image source={require('./Gambar2.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:220,marginTop:10,position:"absolute"}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:225,color:"white"}}>
            Vihara Patung
         </Text>
        </View>
        <View>
        <Image source={require('./Gambar3.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:30,marginTop:10}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:35,color:"white"}}>
            Replika SD
         </Text>
         <Image source={require('./Gambar4.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:220,marginTop:10,position:"absolute"}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:225,color:"white"}}>
            Pantai Nyiur
         </Text>
        </View>
        <View>
        <Image source={require('./Gambar5.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:30,marginTop:10}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:35,color:"white"}}>
            Pantai Serdang
         </Text>
         <Image source={require('./Gambar6.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:220,marginTop:10,position:"absolute"}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:225,color:"white"}}>
            Vihara Patung
         </Text>
        </View>
        <View>
        <Image source={require('./Gambar7.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:30,marginTop:10}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:35,color:"white"}}>
            Replika SD
         </Text>
         <Image source={require('./Gambar8.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:220,marginTop:10,position:"absolute"}} />
         <Text style={{position:"absolute",fontSize:15,marginTop:120,marginLeft:225,color:"white"}}>
            Pantai Nyiur
         </Text>
        </View>

       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default Destinasi