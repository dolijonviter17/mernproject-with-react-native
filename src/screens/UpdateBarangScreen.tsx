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
const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParams, "UpdateBarang">;

const UpdateBarangScreen: React.FC<Props> = ({ navigation, route }) => {
  const { data } = route.params;
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [dataBarang, setDataBarang] = useState({
    ...data,
    stok: data.stok.toString(),
    jumlah_terjual: data.jumlah_terjual.toString(),
  });

  const handleUpdateBarang = async (data: any) => {
    setLoading(true);
    try {
      data.stok = parseInt(data.stok);
      data.jumlah_terjual = parseInt(data.jumlah_terjual);
      await APIService().patch(`/barang/${data._id}`, data);
      Alert.alert("data berhasil diupdate");
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
          title="Update Barang"
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
            title="Update Barang"
            style={{ marginBottom: 20 }}
            onPress={() => handleUpdateBarang(dataBarang)}
          />
        </View>
      </View>
    </>
  );
};

export default UpdateBarangScreen;
