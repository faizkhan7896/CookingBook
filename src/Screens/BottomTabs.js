import {useNavigation} from '@react-navigation/native';
import {default as React, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../Utils/Constants';
import icons from '../Utils/icons';
import Home from './TabScreens/Home';
import Search from './TabScreens/Search';
import Bookmarks from './TabScreens/Bookmarks';
import Setting from './TabScreens/Setting';

export default function Login() {
  const [currentPage, setCurrentPage] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      {currentPage == 0 ? (
        <Home navigation={navigation} />
      ) : currentPage == 1 ? (
        <Search navigation={navigation} />
      ) : currentPage == 2 ? (
        <Bookmarks navigation={navigation} />
      ) : (
        <Setting navigation={navigation} />
      )}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: theme.colors.black,
          //   borderWidth: 1,
          //   borderColor: 'red',
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => setCurrentPage(0)}
          style={{
            width: Dimensions.get('window').width / 4,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            backgroundColor: theme.colors.black,
          }}>
          <Image
            source={icons.dashboard_icon}
            resizeMode="contain"
            style={{
              tintColor:
                currentPage == 0 ? theme.colors.white : theme.colors.gray,
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage(1)}
          style={{
            width: Dimensions.get('window').width / 4,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            backgroundColor: theme.colors.black,
          }}>
          <Image
            source={icons.search_icon}
            resizeMode="contain"
            style={{
              tintColor:
                currentPage == 1 ? theme.colors.white : theme.colors.gray,
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(2)}
          style={{
            width: Dimensions.get('window').width / 4,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            backgroundColor: theme.colors.black,
          }}>
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{
              tintColor:
                currentPage == 2 ? theme.colors.white : theme.colors.gray,
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(3)}
          style={{
            width: Dimensions.get('window').width / 4,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            backgroundColor: theme.colors.black,
          }}>
          <Image
            source={icons.menu_icon}
            resizeMode="contain"
            style={{
              tintColor:
                currentPage == 3 ? theme.colors.white : theme.colors.gray,
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
