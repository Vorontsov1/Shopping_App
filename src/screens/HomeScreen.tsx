import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";



const Avatar_Url =
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80";

const HomeScreen = () => {
    const {colors} = useTheme();

  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 32,
            paddingVertical: 32,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            source={{
              uri: Avatar_Url,
            }}
            style={{ width: 60, aspectRatio: 1, borderRadius: 52 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, Eve 👋
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: colors.text,
                opacity: 0.5,
              }}
              numberOfLines={1}
            >
              Discover fashion that suit your style
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
