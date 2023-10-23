import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParams } from "../stack/RootStackScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import Profiles from "../assets/images/jonvier.jpg";
import {
  LoginProps,
  checkAccoutStorage,
  getProfileCollection,
} from "../model/QuisModel";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ButtonComponent, HeaderComponent } from "../components";
import APIService from "../APIService";

type Props = NativeStackScreenProps<RootStackParams, "DetailBarang">;

const h = Dimensions.get("window").height;

const w = Dimensions.get("window").width;

interface BiodataProps {
  label?: string;
  content?: string;
  name?: string;
  avatar?: string;

  sosmed?: {
    icon: string;
    name: string;
  }[];
}

const MySosmed: BiodataProps["sosmed"] = [
  {
    icon: "instagram",
    name: "@jonviterr",
  },
  {
    icon: "github",
    name: "@dolijonviter17",
  },
  {
    icon: "twitter",
    name: "@Jonviterr",
  },
  {
    icon: "linkedin-square",
    name: "@dolijonviter17",
  },
];

const MyProfile: React.FC<BiodataProps> = ({ name, avatar }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
      }}
      // style={{
      //   alignItems: "center",
      //   justifyContent: "flex-end",
      // }}
    >
      {/* <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
        source={Profiles}
      /> */}
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          // marginRight: 10,
        }}
        source={{
          uri: avatar,
        }}
      />

      <Text
        style={{
          fontSize: 16,
          marginTop: 10,
          color: "#f26a50",
          fontFamily: "Montserrat-Medium",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const BiodataComponent: React.FC<BiodataProps> = ({ label, content }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        borderBottomColor: colors.text,
        borderBottomWidth: 1.5,
        paddingBottom: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontFamily: "Montserrat-Medium",
          color: colors.text,
        }}
      >
        {label} :
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "Montserrat-Bold",
          color: colors.text,
        }}
      >
        {content}
      </Text>
    </View>
  );
};

const SosmedComponent = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        width: "80%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      {MySosmed.map((item) => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <AntDesign name={item.icon} color={colors.text} size={35} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 13,
                fontFamily: "Montserrat-Bold",
                textDecorationLine: "underline",
                color: colors.text,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const DetailBarangScreen: React.FC<Props> = ({ route, navigation }: Props) => {
  const { colors } = useTheme();
  const { data } = route.params;
  const [dataBarang, setDataBarang] = useState({ ...data });

  const getUserProfile = () => {
    return (
      <>
        <BiodataComponent
          label="Nama Barang"
          content={dataBarang.nama_barang}
        />
        <BiodataComponent label="Stok" content={dataBarang.stok} />
        <BiodataComponent
          label="Jumlah Terjual"
          content={dataBarang.jumlah_terjual}
        />
        <BiodataComponent
          label="Tanggal Transaksi"
          content={dataBarang.tanggal_transaksi}
        />
        <BiodataComponent
          label="Jenis Barang"
          content={dataBarang.jenis_barang}
        />
      </>
    );
  };

  const handleDeleteBarang = async (barang: any) => {
    // navigation.goBack();
    try {
      await APIService().delete(`/barang/${barang._id}`);
      Alert.alert("data berhasil dihapus");
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <HeaderComponent
        title={dataBarang.nama_barang}
        onPress={() => navigation.goBack()}
      />
      {/* <ImageBackground
        style={{
          height: 0.2 * h,
          overflow: "hidden",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
        source={require("../assets/images/bgprofile.jpg")}
      >
        <View
          style={{
            marginTop: Platform.OS === "ios" ? 60 : 20,
            paddingRight: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={handleBack}>
            <AntDesign size={25} color={"#fff"} name="arrowleft" />
          </TouchableOpacity>
        </View>
      </ImageBackground> */}

      <View
        style={{
          paddingTop: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
            marginVertical: 20,
            fontFamily: "Montserrat-Bold",
          }}
        >
          Detail Barang
        </Text>
        {getUserProfile()}
        {/* <BiodataComponent label="Name" content={profile.fullname} />
        <BiodataComponent label="Username" content="Mobile Developer" />
        <BiodataComponent label="Place" content="Bandung City" /> */}
        {/* <SosmedComponent /> */}
      </View>

      <ButtonComponent
        title="Hapus "
        style={{ marginBottom: 20 }}
        onPress={() => handleDeleteBarang(dataBarang)}
      />

      {/* <TouchableOpacity>
        <LinearGradient
          style={{
            height: 50,
            width: "80%",
            alignSelf: "center",
            borderRadius: 30,
            marginTop: 10,
          }}
          colors={["#f26a50", "#f20042", "#f20045"]}
        >
          <Text
            style={{
              fontSize: 16,
              marginTop: 10,
              color: colors.text,
              textAlign: "center",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Logout
          </Text>
        </LinearGradient>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default DetailBarangScreen;
