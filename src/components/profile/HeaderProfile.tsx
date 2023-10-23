import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import Photo from "../../assets/images/me.jpg";
const h = Dimensions.get("window").height;

const HeaderProfile = () => {
  return (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        paddingTop: 70,
        backgroundColor: "rgba(0,0,0,0.2)",

        width: "100%",
        height: h * 0.3,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              color: "#f26a50",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Jonviter Simbolon
          </Text>
          <Text
            style={{
              marginTop: 7,
              fontSize: 14,
              color: "#fff",
              // width : '50%',
              fontFamily: "Montserrat-Medium",
            }}
          >
            Mobile Application Developer
          </Text>
        </View>

        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
          source={Photo}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          height: 5,
          borderRadius: 2,
          width: "90%",
          backgroundColor: "#00313f",
        }}
      />
      <View
        style={{
          marginTop: 15,
          width: "90%",
          // flexDirection : 'row',
          // justifyContent : 'space-between'
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Entypo name="email" size={20} color="#00313f" />
          <Text
            style={{
              marginLeft: 3,
              fontSize: 13,
              color: "#fff",
              fontFamily: "Montserrat-Medium",
            }}
          >
            dolijonviter17@gmail.com
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="location-pin" size={20} color="#00313f" />
          <Text
            style={{
              marginLeft: 3,
              fontSize: 13,
              color: "#fff",
              fontFamily: "Montserrat-Medium",
            }}
          >
            Bandung / Indonesia
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderProfile;
