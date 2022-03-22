import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import TextFormatted from '../../Components/TextFormatted';
import {SIZES, theme} from '../../Utils/Constants';
import icons from '../../Utils/icons';
import LottieView from 'lottie-react-native';
import images from '../../Utils/images';

const list = [
  {
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
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: 'rgba(240,240,232,0.9)',
    navTintColor: '#000',
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },

  // Main Recipies
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },

  // Sweets Recipies

  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: SIZES.base}}>
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

          <View style={{flex: 1, marginLeft: SIZES.radius}}>
            {/* Book name and author */}
            <View>
              <TextFormatted
                style={{
                  paddingRight: SIZES.padding,
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
      <ScrollView style={{marginTop: SIZES.radius}}>
        <View style={{marginTop: SIZES.padding}}>
          <View
            style={{
              flex: 1,
              marginTop: SIZES.radius,
              paddingLeft: SIZES.padding,
            }}>
            <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
