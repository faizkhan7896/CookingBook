import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox, Icon } from "react-native-elements";
import { textStyles } from "../utils/styles";
import { theme } from "../utils/constants";
import TextFormatted from "./TextFormatted";

export default function Header({ onPress, text, backgroundColor }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingVertical: 30,
        backgroundColor: backgroundColor || theme.colors.white,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Icon name="chevron-left" color={theme.colors.primary} size={30} />
      </TouchableOpacity>
      <TextFormatted style={textStyles.heading3}>{text}</TextFormatted>
      <Icon name="chevron-left" style={{ opacity: 0 }} size={30} />
    </View>
  );
}
