import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image, ScrollView} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const GetStarted =({navigation})=>{
    return(
        <ScrollView style={{flex:1,backgroundColor:"white"}}>
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Favorite')} >
            <Image source={require('./search.png')}
            style={{width: 400, height: 60}} />
            </TouchableOpacity>
            </View>
            <View >
            <Image source={require('./beranda.png')}
            style={{width: 558, height: 450,marginTop:5}} />
            <Text style={{position:"absolute",fontSize:12,color:'white',marginTop:350,marginLeft:10}}>
                Wisata air
            </Text>
            <Text style={{position:"absolute",fontSize:24,color:'white',marginLeft:10,marginTop:365,fontWeight:"bold"}}>
                Pulau Bukulimau
            </Text>
            <Text style={{position:"absolute",fontSize:24,color:'white',marginLeft:10,marginTop:390,fontWeight:"bold"}}>
                Underwater
            </Text>
            </View>
            <View>
            <Text style={{position:"absolute",fontSize:20,color:'black',marginLeft:110,marginTop:25,fontWeight:"bold"}}>
                Destinasi Wisata
            </Text>
            <Text style={{position:"absolute",fontSize:12,marginLeft:145,marginTop:55}}>
                Pilihan terbaik
            </Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} > 
            <Image source={require('./Gambar1.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:30,marginTop:100}} />
         <Text style={{position:"absolute",fontSize:14,color:"white",marginTop:210,marginLeft:35}}>Gunung Lomut</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
         <Image source={require('./Gambar2.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:215,marginTop:-140,position:"absolute"}} />
         <Text style={{position:"absolute",fontSize:14,color:"white",marginTop:-32,marginLeft:220}}>Viahara Patung</Text>
         </TouchableOpacity>

            </View>
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
            <Image source={require('./Gambar3.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:30,marginTop:15}} />
         <Text style={{position:"absolute",fontSize:14,color:"white",marginTop:125,marginLeft:35}}>Replika SD</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
         <Image source={require('./Gambar4.png')}
         style={{width: 150, height: 140,borderRadius:10/2,marginLeft:215,marginTop:-140,position:"absolute"}} />
         <Text style={{position:"absolute",fontSize:14,color:"white",marginTop:-32,marginLeft:220}}>Pantai Nyiur</Text>
         </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
                <Text style={{marginLeft:150,marginTop:30,color:"#1e90ff"}}>
                    Lihat Lainnya
                </Text>
                </TouchableOpacity>
            </View>
            <View>
            <Text style={{marginTop:40}}>
            --------------------------------------------------------------------------------------------------
         </Text>
            </View>
            <View>
                <Text style={{fontSize:20,fontWeight:"bold",color:"black",marginTop:25,marginLeft:115}}>
                    Jelajahi Sekarang
                </Text>
            </View>
            <View>
                <Text style={{fontSize:12,marginLeft:120}}>
                    Pilih kategori yang diminati
                </Text>
            </View>
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
            <Image source={require('./alam.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:20,marginTop:25}} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
         <Image source={require('./air.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:100,marginTop:-70,position:"absolute"}} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
         <Image source={require('./kuliner.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:190,marginTop:-70,position:"absolute"}} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
         <Image source={require('./sejarah.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:280,marginTop:-70,position:"absolute"}} />
         </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Maps')} >
            <Image source={require('./penginapan.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:20,marginTop:25}} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
         <Image source={require('./publik.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:100,marginTop:-70,position:"absolute"}} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
         <Image source={require('./transportasi.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:190,marginTop:-70,position:"absolute"}} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=> navigation.navigate('Destinasi')} >
         <Image source={require('./oleh.png')}
         style={{width: 80, height: 70,borderRadius:10/2,marginLeft:280,marginTop:-70,position:"absolute"}} />
         </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Corona')} >
            <Image source={require('./virus.png')}
         style={{width: 350, height: 200,borderRadius:10/2,marginLeft:20,marginTop:70,position:"absolute"}} />
         </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize:20,color:"black",fontWeight:"bold",marginTop:310,marginLeft:90}}>
                    Informasi dan Berita
                </Text>
            </View>
            <View>
                <Text style={{fontSize:12,marginLeft:120}}>
                    Seputar Belitung Timur
                </Text>
            </View>
            <View>
            <Text style={{marginLeft:12,marginRight:12,marginTop:20}}>
            -------------------------------------------------------------------------------------------
         </Text>
            </View>
            <View style={{flexDirection:'row',marginTop:30}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Smp')} >
        <Image source={require('./kap.png')}
         style={{width: 64, height: 64,borderRadius:10/2,marginLeft:24}}/>
         </TouchableOpacity>
         <Text style={{marginLeft:15,fontSize:18,color:"black"}}>
         Adakan Karjurkab Tinju 2022
            </Text>
            <Text style={{position:"absolute",marginLeft:102,marginTop:22,fontSize:12}}>
            20 oktober 2021
            </Text>
        </View>
        <View>
        <Text style={{marginLeft:12,marginRight:12,marginTop:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
        </View>
         <View style={{flexDirection:'row',marginTop:20}}>
         <TouchableOpacity onPress={()=> navigation.navigate('Smp')} >
        <Image source={require('./beltim.png')}
         style={{width: 64, height: 64,borderRadius:10/2,marginLeft:24}}/>
         </TouchableOpacity>
         <Text style={{marginLeft:15,fontSize:18,color:"black"}}>
            Wabup Beltim Apresiasi Job
            </Text>
            <Text style={{marginLeft:102,fontSize:18,color:"black",position:"absolute",marginTop:20}}>
            Fair Beltim
            </Text>
            <Text style={{position:"absolute",marginLeft:102,marginTop:50,fontSize:12}}>
                20 oktober 2021
            </Text>
        </View>
        <View>
        <Text style={{marginLeft:12,marginRight:12,marginTop:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Smp')} >
        <Image source={require('./smpf.png')}
         style={{width: 64, height: 64,borderRadius:10/2,marginLeft:24}}/>
         </TouchableOpacity>
         <Text style={{marginLeft:10,fontSize:18,color:"black"}}>
         SMP Negri 4 Manggar Terima
            </Text>
            <Text style={{marginLeft:98,fontSize:18,color:"black",position:"absolute",marginTop:20}}>
            Bibit Buah
            </Text>
            <Text style={{position:"absolute",marginLeft:100,marginTop:50,fontSize:12}}>
                20 oktober 2021
            </Text>
        </View>
        <View>
        <Text style={{marginLeft:12,marginRight:12,marginTop:10}}>
            -------------------------------------------------------------------------------------------
         </Text>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Informasi')} >
            <Text style={{color:'#1e90ff',marginLeft:130,marginTop:30,fontSize:14,fontWeight:"bold"}}>
                Informasi Lainnya
            </Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{marginTop:50}}></Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
export default GetStarted