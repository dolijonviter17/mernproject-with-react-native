import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import APIService from "../APIService";
import {
  ButtonComponent,
  HeaderComponent,
  TextInputComponent,
} from "../components";
import Loading from "../components/global/Loading";
import { RootStackParams } from "../stack/RootStackScreen";
import { generateDateTime } from "../utils/Utilities";
const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParams, "CreateBarang">;

const CreateBarangScreen: React.FC<Props> = ({ navigation, route }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [dataBarang, setDataBarang] = useState({
    nama_barang: "",
    stok: "",
    jumlah_terjual: "",
    tanggal_transaksi: generateDateTime(),
    jenis_barang: "",
  });

  const handleTambahBarang = async (data: any) => {
    setLoading(true);
    try {
      data.stok = parseInt(data.stok);
      data.jumlah_terjual = parseInt(data.jumlah_terjual);
      await APIService().post(`/barang/add`, data);
      Alert.alert("data berhasil ditambahkan");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#F9F9F9",
        }}
      >
        <HeaderComponent
          title="Tambah Data Barang"
          onPress={() => navigation.goBack()}
        />

        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 10,

            // paddingTop: 15,
            // paddingHorizontal: 10,
            // alignItems: "center",
          }}
        >
          {loading ? <Loading /> : null}
          <TextInputComponent
            label="Nama Barang"
            placeholder="Nama Barang"
            value={dataBarang.nama_barang}
            borderColor={colors.border}
            onChangeText={(e) =>
              setDataBarang({
                ...dataBarang,
                nama_barang: e,
              })
            }
          />
          <TextInputComponent
            label="Stok"
            placeholder="Stok"
            value={dataBarang.stok}
            borderColor={colors.border}
            onChangeText={(e) =>
              setDataBarang({
                ...dataBarang,
                stok: e,
              })
            }
          />
          <TextInputComponent
            label="Jumlah Terjual"
            placeholder="Jumlah Terjual"
            value={dataBarang.jumlah_terjual}
            borderColor={colors.border}
            onChangeText={(e) =>
              setDataBarang({
                ...dataBarang,
                jumlah_terjual: e,
              })
            }
          />
          <TextInputComponent
            label="Jenis Barang"
            placeholder="Jenis Barang"
            value={dataBarang.jenis_barang}
            borderColor={colors.border}
            onChangeText={(e) =>
              setDataBarang({
                ...dataBarang,
                jenis_barang: e,
              })
            }
          />
          <ButtonComponent
            title="Tambah Barang"
            style={{ marginBottom: 20 }}
            onPress={() => handleTambahBarang(dataBarang)}
          />
        </View>
      </View>
    </>
  );
};

export default CreateBarangScreen;
