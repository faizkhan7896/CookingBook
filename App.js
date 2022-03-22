import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import TextFormatted from './src/Components/TextFormatted';
import AppNavigator from './src/Navigation/AppNavigator';
import {theme} from './src/Utils/Constants';
// import stripe from 'react-native-stripe-payments';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Provider>
        <PersistGate loading={null}> */}
      <AppNavigator />
      <Toast
        visibilityTime={1500}
        autoHide={true}
        config={{
          success: props => (
            <View
              style={[
                styles.toastContainer,
                {backgroundColor: theme.colors.primary},
              ]}>
              <TextFormatted style={styles.toastText}>
                {props.text1}
              </TextFormatted>
            </View>
          ),
          error: props => (
            <View
              style={[
                styles.toastContainer,
                {backgroundColor: theme.colors.critical},
              ]}>
              <TextFormatted style={styles.toastText}>
                {props.text1}
              </TextFormatted>
            </View>
          ),
          payment: props => (
            <View
              style={[
                styles.toastContainer,
                {backgroundColor: theme.colors.success},
              ]}>
              <TextFormatted style={styles.toastText}>
                {props.text1}
              </TextFormatted>
            </View>
          ),
        }}
      />
      {/* </PersistGate>
      </Provider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    width: Dimensions.get('window').width - 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  toastText: {color: 'white', fontWeight: '500'},
});
