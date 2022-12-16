import React from "react";
import { View, StyleSheet, Text,Image,ScrollView} from "react-native";

const Corona =()=>{
    return(
       <ScrollView>
         <Image source={require('./coro.png')}
         style={{width: 400, height: 270}} />
         <Text style={{color:'black',fontWeight:'500',fontSize:25,marginTop:18,marginLeft:15}}>
         Cegah Virus Corona, Jaga Kesehatan dengan GERMAS
         </Text>
         <Text style={{marginLeft:15,marginTop:5,fontSize:12}}>
            20 Oktober 2021
         </Text>
         <Text style={{color:'black',marginLeft:15,marginTop:10,fontWeight:'400',fontSize:14}}>
         Menteri Kesehatan dr. Terawan Agus Putranto meminta kepada seluruh masyarakat Indonesia agar tetap menjaga kesehatan diri sendiri dan keluarga dengan terus berperilaku hidup bersih dan sehat seiring dengan kasus virus corona yang terdeteksi di Cina dan beberapa negara.

Menurut Menkes, yang perlu disadari benar adalah pentingnya menjaga kesehatan diri sendiri karena pencegahan tersebut adalah yang paling baik dan murah. Adapun langkah pencegahan dan menjaga diri dari Virus Corona adalah dengan menerapkan GERMAS (Gerakan Masyarakat Hidup Sehat). Adapun caranya adalah dengan beberapa kegiatan berikut:

Rajin cuci tangan pakai sabun

Makan dengan gizi yang seimbang

Rajin berolahraga dan istirahat yang cukup

Jaga kebersihan lingkungan

Tidak merokok

Minum air mineral 8 gelas/hari

Makan makanan yang dimasak dengan sempurna dan jangan makan daging dari hewan yang berpotensi menularkan

Bila demam dan sesak nafas, segera ke fasilitas kesehatan

Gunakan masker bila batuk atau tutup mulut dengan lengan atas bagian dalam

Jangan lupa berdoa

Itulah beberapa cara mencegah virus Corona dengan GERMAS. Dengan meningkatkan kesehatan diri sendiri dan keluarga, dapat menciptakan lingkungan yang bersih dan dapat mengurangi risiko terkena penyakit.

Di bawah ini adalah media terkait dengan virus corona Covid-19:

Flyer: Cegah Virus Corona dengan GERMAS Format PDF
Flyer: Cegah Virus Corona dengan GERMAS Format AI
Flyer: Pencegahan Virus Corona untuk Petugas Kesehatan Format PDF
Flyer: Pencegahan Virus Corona untuk Petugas Kesehatan Format AI
Flyer: Pencegahan Virus Corona untuk Masyarakat Format AI
Flyer: Pencegahan Virus Corona untuk Masyarakat Format PDF
         </Text>
       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default Corona