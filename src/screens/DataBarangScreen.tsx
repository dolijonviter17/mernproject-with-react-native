import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Feature from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DashboardHeader } from "../components";
import { RootStackParams } from "../stack/RootStackScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";
import APIService from "../APIService";
import { TEXT_STYLES } from "../assets/fonts";
import { LogoutModal } from "../components/dashboard";
import Loading from "../components/global/Loading";
import { AppContext } from "../context/AppContext";
const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParams, "Barangs">;

interface BoxItemProps {
  name: string;
  count: number;
  style?: ViewStyle;
}

interface AssetProps {
  style?: ViewStyle;
  data: any;
  handleEditBarang?: () => void;
  handleDetailBarang?: () => void;
}

const BarangItem = ({
  data,
  style,
  handleEditBarang,
  handleDetailBarang,
}: AssetProps) => {
  return (
    <TouchableOpacity
      onPress={handleDetailBarang}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#F9F9F9",
        paddingBottom: 10,
      }}
    >
      {/* <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
        source={{
          uri: data.avatar,
        }}
      /> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          paddingLeft: 20,
        }}
      >
        <View>
          <Text
            style={[
              TEXT_STYLES.text500,
              {
                color: "#06122B",
                paddingBottom: 7,
              },
            ]}
          >
            {data.nama_barang}
          </Text>
          <Text
            style={[
              TEXT_STYLES.text500Bold,
              {
                color: "#06122B",
                fontSize: 16,
                paddingBottom: 5,
                fontWeight: "700",
              },
            ]}
          >
            {`Stok : ${data.stok}`}
          </Text>
          <Text
            style={[
              TEXT_STYLES.text500Bold,
              {
                color: "#06122B",
                fontSize: 16,
                paddingBottom: 5,
                fontWeight: "700",
              },
            ]}
          >
            {`Jumlah Terjual : ${data.jumlah_terjual}`}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleEditBarang}>
        <LinearGradient
          colors={["#7DC1FF", "#278CEA"]}
          //   start={{ x: 0, y: 1 }}
          start={{ x: 0.7, y: 0 }}
          //   end={{ x: 1, y: 0 }}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome size={20} name={"pencil"} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const DataBarangScreen: React.FC<Props> = ({ route, navigation }) => {
  const { colors } = useTheme();
  const [modal, setModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const { loginStatus, setLoginStatus } = useContext(AppContext);
  const [allDataBarang, setAllDataBarang] = useState([]);
  const handleUpdateUser = (barang: any) => {
    navigation.push("UpdateBarang", {
      data: barang,
    });
    // navigation.navigate("EditStack", {
    //   screen: "Edit",
    // });
  };
  const handleDetailBarang = (barang: any) => {
    navigation.push("DetailBarang", {
      data: barang,
    });
  };

  const getAllDataBarang = () => {
    try {
      APIService()
        .get("/allBarang")
        .then((response) => {
          setAllDataBarang(response.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDataBarang();
  }, [allDataBarang]);

  const handleLogout = () => {
    AsyncStorage.removeItem("@token");
    setLoginStatus(!loginStatus);
  };

  const handleCreateBarang = () => {
    navigation.navigate("CreateBarang");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F9F9F9",
      }}
    >
      <DashboardHeader onPressLogout={() => setModal(true)} />

      <View style={styles.searchWrapper}>
        <TouchableOpacity>
          <Feature
            name="search"
            style={{
              paddingRight: 5,
            }}
            color="#fff"
            size={30}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Cari Barang..."
          // value={value}
          // onChangeText={onChangeText}
          style={styles.textInputSearch}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          // paddingVertical: 15,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            TEXT_STYLES.text600,
            {
              color: "#06122B",
              marginBottom: 15,
            },
          ]}
        >
          Data Barang
        </Text>
        <TouchableOpacity onPress={handleCreateBarang}>
          <LinearGradient
            colors={["#7DC1FF", "#278aaA"]}
            //   start={{ x: 0, y: 1 }}
            start={{ x: 0.7, y: 0 }}
            //   end={{ x: 1, y: 0 }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="plus" size={24} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {loading ? <Loading /> : null}
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#fff",
            padding: 15,
          }}
        >
          {!loading && allDataBarang.length
            ? allDataBarang.map((item, key) => (
                <BarangItem
                  key={key}
                  data={item}
                  handleEditBarang={() => handleUpdateUser(item)}
                  handleDetailBarang={() => handleDetailBarang(item)}
                />
              ))
            : null}
        </View>
      </ScrollView>
      <LogoutModal
        handleLogout={handleLogout}
        isVisible={modal}
        cancle={() => setModal(false)}
        onBackdropPress={() => setModal(false)}
      />
    </View>
  );
};

export default DataBarangScreen;

const styles = StyleSheet.create({
  searchWrapper: {
    height: 60,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#C8C8C8",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  textInputSearch: {
    ...TEXT_STYLES.text500,
    flex: 1,
    color: "#333",
    fontWeight: "700",
  },
});
