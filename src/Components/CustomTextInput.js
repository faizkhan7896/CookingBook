import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { theme } from '../utils/constants';
import { textStyles } from '../utils/styles';
import { isTablet } from '../utils/utilFuncs';
import TextFormatted from './TextFormatted';

export default function CustomTextInput({
  placeholder,
  heading,
  onChangeText,
  value,
  error,
  setError,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  style,
  headingStyle,
  readOnly,
  leftError = false,
  renderTextInput,
  maxLength,
  minLength,
  containerStyle,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const textInputProps = {
    ...props,
    style: [
      styles.textInput,
      {
        backgroundColor: isFocused ? theme.colors.surfacePrimary : theme.colors.surface,
        borderWidth: isFocused ? 2 : 1,
        borderColor: isFocused ? theme.colors.primary : theme.colors.borderNor,
        marginVertical: isFocused ? 0 : 2,
      },
      style,
    ],
    autoCapitalize: autoCapitalize,
    keyboardType: keyboardType,
    maxLength: maxLength,
    minLength: minLength,
    secureTextEntry: secureTextEntry,
    placeholder: placeholder,
    placeholderTextColor: 'gray',
    value: value,
    editable: !readOnly,
    caretHidden: false,
    onChangeText: (txt) => {
      onChangeText?.(txt);
      setError?.(null);
    },
    caretHidden: false,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    selectionColor: theme.colors.primary,
    borderRadius: 10,
  };
  return (
    <View style={containerStyle}>
      {!!heading && <TextFormatted style={[textStyles.caption, { color: theme.colors.secondary }, headingStyle]}>{heading}</TextFormatted>}
      {renderTextInput ? renderTextInput(textInputProps) : <TextInput {...textInputProps} />}
      {error ? <TextFormatted style={[styles.error, { marginHorizontal: leftError ? 0 : 20 }]}>{error}</TextFormatted> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 15,
    paddingVertical: 10,
    color: '#000',
    marginTop: 5,
    fontSize: 13,
    borderRadius: 5,
    fontFamily: 'DMSans-Regular',
    height: Platform.OS == 'ios' ? 50 : null,
  },
  error: {
    color: theme.colors.critical,
    marginTop: 2,
    fontSize: 12,
    fontWeight: '700',
  },
});
