import React from "react";
import { View, StyleSheet, Text,Image,ScrollView} from "react-native";

const Favorite =()=>{
    return(
       <ScrollView>
        <View>
        <Image source={require('./fav.png')}
            style={{width: 400, height: 700}} />
        </View>
       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default Favorite