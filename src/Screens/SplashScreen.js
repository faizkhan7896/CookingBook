import {
  ActivityIndicator,
  View,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import * as React from 'react';
// import Onboarding from "../Slider/Onboarding";
// import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import {theme} from '../Utils/Constants';

const Load = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
    navigation.navigate('BottomTabs');
  }, 2500);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.black,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.black}
      />
      {/* <ActivityIndicator size="large" color="white" /> */}
      <LottieView
        style={styles.heartLottie}
        source={require('../assets/lf30_editor_2xxd6uex.json')}
        autoPlay
      />
    </View>
  );
};
export default Load;

const styles = StyleSheet.create({
  heartLottie: {
    width: 250,
    height: 250,
  },
});
