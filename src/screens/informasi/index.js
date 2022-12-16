import React from "react";
import { View, StyleSheet, Text,Image,ScrollView,StatusBar,SafeAreaView} from "react-native";

const Informasi =()=>{
    return (
        <View style={{ flex: 1 , backgroundColor: '#FFFFFF'}}>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                    <View style={{ paddingVertical: 18, backgroundColor: '#FFFFFF',
                    elevation: 2, marginBottom: 5
                    }}>
                        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18, color: '#4B5563' }}>Informasi dan Berita</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar1.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Adakan Kerjurkab Tinju 2022</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>20 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar2.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>15 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar3.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>8 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar1.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Adakan Kerjurkab Tinju 2022</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>20 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar2.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>15 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar3.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>8 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar1.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Adakan Kerjurkab Tinju 2022</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>20 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar2.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>15 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar3.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>8 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar1.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Adakan Kerjurkab Tinju 2022</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>20 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar2.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>Wabup Beltim Apresiasi Job Fair Beltim</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>15 Oktober 2021</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 16, borderBottomColor: '#DADADA', borderBottomWidth: 0.5 }}>
                        <Image source={require('./gambar3.jpg')} style={{ width: 64, height: 64, borderRadius: 12, marginRight: 16 }}></Image>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#1F2937', marginBottom: 1 }}>LKPM Buat Proyek Pemerintah Jadi Lebih Terpantau</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#9096A0' }}>8 Oktober 2021</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
);
}
const styles = StyleSheet.create({})
export default Informasi