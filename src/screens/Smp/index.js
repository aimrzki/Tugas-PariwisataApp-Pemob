import React from "react";
import { View, StyleSheet, Text,Image,ScrollView} from "react-native";

const Smp =()=>{
    return(
       <ScrollView>
         <Image source={require('./smpf.png')}
         style={{width: 400, height: 270}} />
         <Text style={{color:'black',fontWeight:'500',fontSize:25,marginTop:18,marginLeft:15}}>
            SMP Negri 4 Manggar Terima Bibit Buah
         </Text>
         <Text style={{marginLeft:15,marginTop:5,fontSize:12}}>
            20 Oktober 2021
         </Text>
         <Text style={{color:'black',marginLeft:15,marginTop:10,fontWeight:'400',fontSize:14}}>
         Manggar, Diskominfo Beltim— Anggota DPRD Kabupaten Belitung Timur (Beltim), Koko Haryanto mengatakan pemanfaatan lahan kosong ataupun kritis sangat penting dilakukan oleh masyarakat pasca tambang di Kabupaten Beltim.
         al itu disampaikan Koko dalam Sosialisasi Pemulihan Lahan dan Penyerahan Bibit sekaligus penyerahan bibit buah oleh pihak Fordas Goes To School di SMP Negeri 4 Manggar,  Kamis (18/11).
         “Dalam kegiatan Fordas Goes To School diharapkan ada kegiatan  pemulihan lahan-lahan, khususnya lahan pasca tambang. Lahan kritis itu nantinya akan dihijaukan kembali.,” ujar Koko.
         Upaya dalam pemulihan lahan bekas tambang antara lain pihak Fordas membagikan bibit tanaman  buah seperti bibit kopi, alpukat dan buah-buahan lainnya sebanyak 100 bibit.
         “Kami berharap bibit-bibit tersebut nantinya akan membuat hutan sekolah menjadi lebih hijau dan hasilnya bisa dinikmati  pihak sekolah,” kata Koko.
         Selain memberikan bibit, Fordas juga melakukan MoU  kerjasama dengan  pihak SMP Negeri 4 Manggar yang tujuannya agar kedua belah pihak sama-sama melakukan pemulihan  lahan pasca tambang.
         Sementara itu,  Hamsiyah selaku Kepala Sekolah SMP Negeri 4 Manggar, SMP Negeri 4 Manggar masih perlu pengijauan apalagi didukung halaman yang luas sehingga membutuhkan banyak tanaman.
         “Kami sangat berterima kasih dengan Fordas yang sudah memberikan bantuan bibit untuk pihak sekolah, ujar Hamsiyah
         </Text>
       </ScrollView>
    )
}
const styles = StyleSheet.create({})
export default Smp