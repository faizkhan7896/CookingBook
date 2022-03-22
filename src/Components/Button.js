import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../utils/constants";
import { textStyles } from "../utils/styles";
import TextFormatted from "./TextFormatted";

export default function Button({
  text,
  render,
  onPress,
  loading,
  color,
  disabled,
  containerStyle,
  textStyle,
  style,
}) {
  return (
    <TouchableOpacity
      style={style}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}
      onPress={loading ? null : onPress}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: color || theme.colors.primary,
            alignItems: "center",
            justifyContent: "center",
          },
          containerStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          render?.([styles.buttonText, textStyle]) || (
            <TextFormatted style={[textStyles.loginwithgoogle, textStyle]}>
              {text}
            </TextFormatted>
          )
        )}
      </View>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

