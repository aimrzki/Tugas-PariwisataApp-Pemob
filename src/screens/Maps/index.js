import React ,{useState}from "react";
import { View, StyleSheet, Text,Image,ScrollView,Dimensions,ImageBackground,FlatList,TouchableOpacity} from "react-native";
export default function Maps({ navigation }) {
const [selectedId, setSelectedId] = useState(null);
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const button_list = [
{
id: '1',
title: 'Semua',
},
{
id: '2',
title: 'Wisata Alam',
},
{
id: '3',
title: 'Wisata Air',
},
{
id: '4',
title: 'Hotel',
},
];
const Item = ({ title, onPress, textColor }) => (
<TouchableOpacity
onPress={onPress}
style={styles.buttonList}
underlayColor='#fff'>
<Text style={[styles.buttonText, textColor]}>{title}</Text>
</TouchableOpacity>
);
const renderItem = ({ item }) => {
const color = item.id === selectedId ? 'blue' : 'black';
return(
<Item title={item.title}
onPress={() => setSelectedId(item.id)}
textColor={{ color }}/>
);
}
return (
<View style={{ flex: 1 }}>
<ImageBackground
source={require('./maps.png')}
style={{ flex: 1}}>
<FlatList
style={{flexGrow: 0}}
horizontal
data={button_list}
renderItem={renderItem}
keyExtractor={item => item.id}
/>
<View
style={styles.markerContainer}>
<Image
style={styles.marker}
source={require('./marker.png')} />
</View>
{ selectedId == 4 &&
<View
style={styles.card}
underlayColor='#fff'>
<Image
style={styles.housePlaceholder}
source={require('./houseplaceholder.png')} />
<View>
<Text style={{marginHorizontal: 15, marginTop: 20, fontSize: 14}}
>Nama Purnama Hotel</Text>
<Text style={{marginHorizontal: 15, marginTop: 5, fontSize: 10}}>Jl.
K.A Bujang batu penyu.....</Text>
<TouchableOpacity
style={styles.buttonLocationDirection}
underlayColor='#fff'>
<Image
style={styles.iconLocationDirection}
source={require('./iconlocationdirection.png')} />
<Text style={[styles.buttonTextLocationDirection]}>Arahkan ke
lokasi</Text>
</TouchableOpacity>
</View>
</View>
}
</ImageBackground>
</View>
);
}
const styles = StyleSheet.create({
buttonList: {
alignSelf: 'flex-start',
marginLeft: 25,
marginRight: 10,
marginTop: 10,
padding:10,
backgroundColor: '#f9f9f9',
borderRadius: 10,
borderColor: '#fff',
},
buttonLocationDirection: {
flexDirection: "row",
alignSelf: 'flex-start',
marginLeft: 10,
marginTop: 10,
padding:10,
backgroundColor: '#0021f3',
borderRadius: 10,
borderColor: '#fff',
},
buttonText: {
color: '#000',
textAlign: 'center',
},
buttonTextLocationDirection: {
fontSize: 10,
color: '#fff',
textAlign: 'center',
marginLeft: 5
},
marker: {
flex: 1,
width: 20,
height: 25,
resizeMode: 'contain'
},
iconLocationDirection: {
width: 15,
height: 15,
resizeMode: 'contain'
},
markerContainer: {
position: 'absolute',
alignSelf: 'center',
bottom: '40%',
backgroundColor: '#f9f9f9',
borderRadius: 10,
padding: 5,
borderColor: '#fff',
},
housePlaceholder: {
height: 120,
width: 140,
borderTopLeftRadius: 15,
borderBottomLeftRadius: 15,
overflow: "hidden"
},
card: {
flexDirection: "row",
position: "absolute",
bottom: 0,
alignSelf: 'center',
marginTop: 10,
marginBottom: 20,
backgroundColor: '#f9f9f9',
borderRadius: 10,
borderColor: '#fff',
},
});