// import {View, Text} from 'react-native';
// import React from 'react';
// import LottieView from 'lottie-react-native';
// import {theme} from '../../Utils/Constants';

// export default function Setting() {
// const [isLoading, setIsLoading] = React.useState(true);

// setTimeout(() => {
//   setIsLoading(false);
// }, 1500);
// if (isLoading) {
//   return (
//     <View
//       style={{
//         backgroundColor: theme.colors.black,
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <LottieView
//         style={{width: 60, height: 60}}
//         source={require('../../assets/lf30_editor_pwlh8kpl.json')}
//         autoPlay
//       />
//     </View>
//   );
// }

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Setting</Text>
//     </View>
//   );
// }

import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Statusbar from '../../Components/Statusbar';
import {theme} from '../../Utils/Constants';
import LottieView from 'lottie-react-native';

function SignInScreen({navigation}) {
  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  if (isLoading) {
    return (
      <View
        style={{
          backgroundColor: theme.colors.black,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          style={{width: 60, height: 60}}
          source={require('../../assets/lf30_editor_pwlh8kpl.json')}
          autoPlay
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor="#f77343" BarStyle="light-content" />
      <View style={styles.header}>
        {/* <TouchableOpacity
          style={{height: 30, marginRight: 300}}
          onPress={() => navigation.goBack()}> */}
        <Ionicons
          style={[styles.plusicon, {opacity: 0}]}
          name="ios-arrow-back-outline"
          size={30}
          color="#fff"
        />
        {/* </TouchableOpacity> */}

        <Image
          style={{
            height: 130,
            width: 130,
            resizeMode: 'contain',
            borderRadius: 100,
            alignSelf: 'center',
            marginBottom: 50,
            // borderWidth: 1,
          }}
          source={{uri: 'https://picsum.photos/500'}}
        />
        <View style={{marginTop: -45}}>
          <Text style={styles.text_header}>Batricia Salfiora</Text>

          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              marginTop: 5,
              alignSelf: 'center',
            }}>
            Batricia52567@gmail.com
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: '72%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.black,
              height: 50,
              width: 120,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Sigin')}>
            <Text style={{color: '#fff', fontSize: 16}}>Sigin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.black,
              height: 50,
              width: 120,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#fff', fontSize: 16}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.Text}>Account Info</Text>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Fontisto
                style={{marginTop: 15}}
                name="person"
                color="#f77343"
                size={28}
              />
              <View style={{marginLeft: 17}}>
                <Text style={styles.HeadingText}>Name</Text>
                <Text
                  style={{
                    color: '#76797f',
                    fontSize: 15,
                    marginTop: 6,
                  }}>
                  Batricia Salfiora
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              {/* <View style={{marginLeft: 17}}> */}
              <MaterialIcons
                style={{marginTop: 15}}
                name="mark-email-read"
                color="#f77343"
                size={28}
              />
              {/* </View> */}
              <View style={{marginLeft: 17}}>
                <Text style={styles.HeadingText}>Email adderess</Text>
                <Text
                  style={{
                    color: '#76797f',
                    fontSize: 15,
                    marginTop: 6,
                  }}>
                  Batricia52567@gmail.com
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View>
                <MaterialIcons
                  style={{marginTop: 15}}
                  name="phone"
                  color="#f77343"
                  size={28}
                />
              </View>
              <View style={{marginLeft: 17}}>
                <Text style={styles.HeadingText}>Number</Text>
                <Text
                  style={{
                    color: '#76797f',
                    fontSize: 15,
                    marginTop: 6,
                  }}>
                  +91-8123673900
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View>
                <MaterialIcons
                  style={{marginTop: 15}}
                  name="location-city"
                  color="#f77343"
                  size={28}
                />
              </View>
              <View style={{marginLeft: 17}}>
                <Text style={styles.HeadingText}>Adderess</Text>
                <Text
                  style={{
                    color: '#76797f',
                    fontSize: 15,
                    marginTop: 6,
                  }}>
                  Manigh Bagh "Indore"
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View>
                <Fontisto
                  style={{marginTop: 15}}
                  name="date"
                  color="#f77343"
                  size={28}
                />
              </View>
              <View style={{marginLeft: 17}}>
                <Text style={styles.HeadingText}>D.O.B</Text>
                <Text
                  style={{
                    color: '#76797f',
                    fontSize: 15,
                    marginTop: 6,
                  }}>
                  03/03/2003
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View>
                <Fontisto
                  style={{marginTop: 7}}
                  name="player-settings"
                  color="#f77343"
                  size={28}
                />
              </View>
              <View style={{marginLeft: 17}}>
                <Text style={styles.HeadingText}>Settings</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
export default SignInScreen;

const {height} = Dimensions.get('screen');

const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f77343',
  },
  plusicon: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  Text: {
    paddingBottom: 25,
    fontSize: 27,
    fontWeight: '700',
    color: '#f77343',
  },
  HeadingText: {
    paddingTop: 8,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: theme.colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 30,
    alignItems: 'flex-start',
    width: '100%',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
