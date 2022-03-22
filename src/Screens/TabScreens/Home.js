import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import TextFormatted from '../../Components/TextFormatted';
import {SIZES, theme} from '../../Utils/Constants';
import icons from '../../Utils/icons';
import images from '../../Utils/images';
import LottieView from 'lottie-react-native';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 18}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: theme.colors.lightGray,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const Home = ({navigation}) => {
  const profileData = {
    name: 'Username',
    point: 200,
  };

  // recipies Break fast

  const Breakfast1 = {
    id: 1,
    bookName: 'Best French toast',
    bookCover: images.FrenchToast,
    rating: 4.5,
    language: 'Eng',
    pageNo: '3 min',
    author: 'Jasmine Warga',
    genre: ['Delicious', 'Nutritious', 'tasty'],
    readed: '12k',
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    method:
      " leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };
  const Breakfast2 = {
    id: 2,
    bookName: 'Petits Pains Au Chocolat',
    bookCover: images.BreakPetits,
    rating: 4.1,
    language: 'Eng',
    pageNo: '35 min',
    author: 'Seith Fried',
    genre: ['Nutritious', 'tasty'],
    readed: '13k',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    method:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };
  const Breakfast3 = {
    id: 3,
    bookName: 'Crunchy Delicious Waffles',
    bookCover: images.Breakwaffle,
    rating: 3.5,
    language: 'Eng',
    pageNo: '20 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Nutritious', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    method:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Breakfast4 = {
    id: 4,
    bookName: 'Eggs Baked In Potatoes',
    bookCover: images.BreakEggsPotatoes,
    rating: 3.5,
    language: 'Eng',
    pageNo: '2 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Nutritious', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    method:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#FFF',
  };
  const Breakfast5 = {
    id: 5,
    bookName: 'Honey Wheat Muffins',
    bookCover: images.Breakmuffins,
    rating: 4.5,
    language: 'Eng',
    pageNo: '25 min',
    author: 'Jasmine Warga',
    genre: ['Delicious', 'Nutritious', 'tasty'],
    readed: '12k',
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    method:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  };

  // Main Recipies

  const Lunch1 = {
    id: 6,
    bookName: 'Vegetarian VFC',
    bookCover: images.LunchVFC1,
    rating: 4.1,
    language: 'Eng',
    pageNo: '45 min',
    author: 'Seith Fried',
    genre: ['Spicy', 'tasty'],
    readed: '13k',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };
  const Lunch2 = {
    id: 7,
    bookName: 'Butter Chicken',
    bookCover: images.Lunchbutterchicken2,
    rating: 3.5,
    language: 'Eng',
    pageNo: '60 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Lunch3 = {
    id: 8,
    bookName: 'Chicken Chilly',
    bookCover: images.Lunchchillichicken3,
    rating: 3.5,
    language: 'Eng',
    pageNo: '60 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Lunch4 = {
    id: 9,
    bookName: 'Chicken Biryani',
    bookCover: images.LunchChickenbiryani4,
    rating: 3.5,
    language: 'Eng',
    pageNo: '61 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Lunch5 = {
    id: 10,
    bookName: 'Kadai Paneer',
    bookCover: images.LunchKadaiPaneer5,
    rating: 3.5,
    language: 'Eng',
    pageNo: '45 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };

  // Sweets Recipies

  const Sweets1 = {
    id: 11,
    bookName: 'Rasgulla',
    bookCover: images.sweet1,
    rating: 4.1,
    language: 'Eng',
    pageNo: '40 min',
    author: 'Seith Fried',
    genre: ['Spicy', 'tasty'],
    readed: '13k',
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#000',
  };
  const Sweets2 = {
    id: 12,
    bookName: 'Gulab Jamun',
    bookCover: images.sweet2,
    rating: 3.5,
    language: 'Eng',
    pageNo: '37 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Sweets3 = {
    id: 13,
    bookName: 'Khopra Paak',
    bookCover: images.sweets3,
    rating: 3.5,
    language: 'Eng',
    pageNo: '1 hr 14 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Sweets4 = {
    id: 14,
    bookName: 'Ras Malai',
    bookCover: images.sweet4,
    rating: 3.5,
    language: 'Eng',
    pageNo: '50 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };
  const Sweets5 = {
    id: 15,
    bookName: 'Zarda',
    bookCover: images.sweet5,
    rating: 3.5,
    language: 'Eng',
    pageNo: '40 min',
    author: 'Ana C Bouvier',
    genre: ['tasty', 'Spicy', 'Delicious'],
    readed: '13k',
    description:
      'This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!',
    backgroundColor: 'rgba(247,239,219,0.9)',
    navTintColor: '#FFF',
  };

  const myBooksData = [
    {
      ...Breakfast1,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...Breakfast2,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...Breakfast3,
      completion: '10%',
      lastRead: '1d 2h',
    },
    {
      ...Breakfast4,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];

  //Categories of recipies

  const categoriesData = [
    {
      id: 1,
      categoryName: 'All',
      books: [
        Lunch1,
        Breakfast1,
        Sweets4,
        Lunch2,
        Breakfast2,
        Lunch3,
        Sweets1,
        Breakfast4,
        Sweets5,
        Lunch5,
        Breakfast5,
        Sweets2,
        Lunch4,
        Breakfast3,
        Sweets3,
      ],
    },
    {
      id: 2,
      categoryName: 'Breakfast',
      books: [Breakfast1, Breakfast2, Breakfast3, Breakfast4, Breakfast5],
    },
    {
      id: 3,
      categoryName: 'Main Dishes',
      books: [Lunch1, Lunch2, Lunch3, Lunch4, Lunch5],
    },
    {
      id: 4,
      categoryName: 'Sweets',
      books: [Sweets1, Sweets2, Sweets3, Sweets4, Sweets5],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={theme.colors.black}
        />

        {/* Greetings */}
        <View style={{flex: 1}}>
          <View style={{marginRight: SIZES.padding}}>
            <TextFormatted style={{color: theme.colors.white}}>
              Welcome in
            </TextFormatted>
            <TextFormatted
              style={{
                color: theme.colors.white,
                fontSize: 20,
                fontWeight: '700',
                marginTop: 5,
              }}>
              Cook Book
            </TextFormatted>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('Point');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </View>

            <TextFormatted
              style={{marginLeft: SIZES.base, color: theme.colors.white}}>
              {profile.point} point
            </TextFormatted>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: SIZES.padding}}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: theme.colors.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/* Claim */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Claim')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <TextFormatted
                style={{
                  marginLeft: SIZES.base,

                  color: theme.colors.white,
                }}>
                Claim
              </TextFormatted>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('Get Point')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <TextFormatted
                style={{
                  marginLeft: SIZES.base,

                  color: theme.colors.white,
                }}>
                Get Point
              </TextFormatted>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('My Card')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
              <TextFormatted
                style={{
                  marginLeft: SIZES.base,

                  color: theme.colors.white,
                }}>
                My Card
              </TextFormatted>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBookSection(myBooks) {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() => navigation.navigate('BookDetail', item)}>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{width: 150, height: 220, borderRadius: 20}}
          />

          {/* Book Info */}
          {/* <View
            style={{              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.clock_icon}
              style={{                width: 20,
                height: 20,
                tintColor: theme.colors.lightGray,
              }}
            />
            <TextFormatted style={{marginLeft: 5, color: theme.colors.lightGray}}>
              {item.lastRead}
            </TextFormatted>

            <Image
              source={icons.page_icon}
              style={{                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: theme.colors.lightGray,
              }}
            />
            <TextFormatted style={{marginLeft: 5, color: theme.colors.lightGray}}>
              {item.completion}
            </TextFormatted>
          </View> */}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextFormatted style={{color: theme.colors.white}}>
            Popular
          </TextFormatted>

          <TouchableOpacity onPress={() => console.log('See More')}>
            <TextFormatted
              style={{
                color: theme.colors.lightGray,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline',
              }}>
              see more
            </TextFormatted>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{flex: 1, marginRight: SIZES.padding}}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory == item.id && (
            <TextFormatted
              style={{
                color: theme.colors.white,
                fontSize: 18,
                fontWeight: '700',
              }}>
              {item.categoryName}
            </TextFormatted>
          )}
          {selectedCategory != item.id && (
            <TextFormatted
              style={{color: theme.colors.lightGray, fontSize: 18}}>
              {item.categoryName}
            </TextFormatted>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1, paddingLeft: SIZES.padding}}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      a => a.id == selectedCategory,
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({item}) => {
      return (
        <View
          style={{
            marginVertical: SIZES.base,
            backgroundColor: theme.colors.black,
            // borderWidth: 1,
            // borderColor: 'red',
            paddingVertical: 5,
          }}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'row'}}
            onPress={() =>
              navigation.navigate('BookDetail', {
                book: item,
              })
            }>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{width: 100, height: 150, borderRadius: 10}}
            />

            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius,
                backgroundColor: theme.colors.black,
              }}>
              {/* Book name and author */}
              <View>
                <TextFormatted
                  style={{
                    paddingRight: SIZES.padding,
                    backgroundColor: theme.colors.black,
                    color: theme.colors.white,
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  {item.bookName}
                </TextFormatted>
                <TextFormatted
                  style={{color: theme.colors.lightGray, marginTop: 5}}>
                  {item.author}
                </TextFormatted>
              </View>

              {/* Book Info */}
              <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
                <Image
                  source={icons.clock_icon}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: theme.colors.lightGray,
                    marginTop: 3,
                  }}
                />
                <TextFormatted
                  style={{
                    color: theme.colors.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.pageNo}
                </TextFormatted>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: theme.colors.lightGray,
                  }}
                />
                <TextFormatted
                  style={{
                    color: theme.colors.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}>
                  {item.readed}
                </TextFormatted>
              </View>

              {/* Genre */}
              <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
                {item.genre.includes('Delicious') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: theme.colors.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <TextFormatted style={{color: theme.colors.lightGreen}}>
                      Delicious
                    </TextFormatted>
                  </View>
                )}
                {item.genre.includes('Spicy') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: theme.colors.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <TextFormatted style={{color: theme.colors.lightRed}}>
                      Spicy
                    </TextFormatted>
                  </View>
                )}
                {item.genre.includes('Nutritious') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: theme.colors.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <TextFormatted style={{color: theme.colors.lightRed}}>
                      Nutritious
                    </TextFormatted>
                  </View>
                )}

                {item.genre.includes('tasty') && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: theme.colors.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}>
                    <TextFormatted style={{color: theme.colors.lightBlue}}>
                      tasty
                    </TextFormatted>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={{position: 'absolute', top: 5, right: 15}}
            onPress={() => console.log('Bookmark')}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{width: 20, height: 20, tintColor: theme.colors.lightGray}}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding,
          backgroundColor: theme.colors.black,
        }}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

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
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.black}}>
      {/* Header Section */}

      {/* Body Section */}
      <ScrollView style={{marginTop: SIZES.radius}}>
        <View style={{height: 200}}>
          {renderHeader(profile)}
          {renderButtonSection()}
        </View>
        {/* Books Section */}
        <View>{renderMyBookSection(myBooks)}</View>

        {/* Categories Section */}
        <View style={{marginTop: SIZES.padding}}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
