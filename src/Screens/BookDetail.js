import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';

import icons from '../Utils/icons';
import {SIZES, theme} from '../Utils/Constants';
import TextFormatted from '../Components/TextFormatted';
import {useRoute} from '@react-navigation/native';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: theme.colors.lightGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const BookDetail = ({item, route, navigation}) => {
  const {params = {}} = useRoute();
  const [book, setBook] = React.useState(params);
  const [isLoading, setIsLoading] = React.useState(true);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);
  //   alert(book);

  //   alert(JSON.stringify(params));
  const indicator = new Animated.Value(0);

  //   React.useEffect(() => {
  //     let {params} = route.params;
  //     setBook(params);
  //   }, [book]);

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
          style={styles.heartLottie}
          source={require('../assets/lf30_editor_pwlh8kpl.json')}
          autoPlay
        />
      </View>
    );
  }

  function renderBookInfoSection() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />

        {/* Color Overlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: book.backgroundColor,
          }}></View>

        {/* Navigation header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 80,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextFormatted style={{color: book.navTintColor}}>
              Book Detail
            </TextFormatted>
          </View>

          <TouchableOpacity
            style={{marginRigth: SIZES.base}}
            onPress={() => console.log('Click More')}>
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View
          style={{flex: 5, paddingTop: SIZES.padding2, alignItems: 'center'}}>
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 150,
              height: 'auto',
            }}
          />
        </View>

        {/* Book Name and Author */}
        <View
          style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
          <TextFormatted style={{color: book.navTintColor}}>
            {book.bookName}
          </TextFormatted>
          <TextFormatted style={{color: book.navTintColor}}>
            {book.author}
          </TextFormatted>
        </View>

        {/* Book Info */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          {/* Rating */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <TextFormatted style={{color: theme.colors.white}}>
              {book.rating}
            </TextFormatted>
            <TextFormatted style={{color: theme.colors.white}}>
              Rating
            </TextFormatted>
          </View>

          <LineDivider />

          {/* Pages */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.radius,
              alignItems: 'center',
            }}>
            <TextFormatted style={{color: theme.colors.white}}>
              {book.pageNo}
            </TextFormatted>
            <TextFormatted style={{color: theme.colors.white}}>
              Number of Page
            </TextFormatted>
          </View>

          <LineDivider />

          {/* Language */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <TextFormatted style={{color: theme.colors.white}}>
              {book.language}
            </TextFormatted>
            <TextFormatted style={{color: theme.colors.white}}>
              Language
            </TextFormatted>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
        {/* Custom Scrollbar */}
        <View
          style={{
            width: 4,
            height: '100%',
            backgroundColor: theme.colors.gray1,
          }}>
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: theme.colors.lightGray4,
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight,
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          />
        </View>

        {/* Description */}
        <ScrollView
          contentContainerStyle={{paddingLeft: SIZES.padding2}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: indicator}}}],
            {useNativeDriver: false},
          )}>
          <Text
            style={{
              color: theme.colors.white,
              marginBottom: SIZES.padding,
              fontSize: 16,
              fontWeight: '700',
            }}>
            Description
          </Text>
          <TextFormatted style={{color: theme.colors.lightGray}}>
            {book.description}
          </TextFormatted>
        </ScrollView>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* Bookmark */}
        <TouchableOpacity
          style={{
            width: 60,
            backgroundColor: theme.colors.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => console.log('Bookmark')}>
          <Image
            source={icons.bookmark_icon}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: theme.colors.lightGray2,
            }}
          />
        </TouchableOpacity>

        {/* Start Reading */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: theme.colors.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Recipie', params)}>
          <TextFormatted style={{color: theme.colors.white}}>
            Start Reading
          </TextFormatted>
        </TouchableOpacity>
      </View>
    );
  }

  if (book) {
    return (
      <View style={{flex: 1, backgroundColor: theme.colors.black}}>
        {/* Book Cover Section */}
        <View style={{flex: 4}}>{renderBookInfoSection()}</View>

        {/* Description */}
        <View style={{flex: 2}}>{renderBookDescription()}</View>

        {/* Buttons */}
        <View style={{height: 70, marginBottom: 30}}>
          {renderBottomButton()}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetail;

const styles = StyleSheet.create({
  heartLottie: {
    width: 60,
    height: 60,
  },
});
