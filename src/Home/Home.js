import { Container, Input } from 'native-base';
import React from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import { SliderBox } from 'react-native-image-slider-box';
import { ScrollView } from 'react-native-gesture-handler';
const deviceWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        require('../assets/b1.jpg'),
        require('../assets/b2.png'),
        require('../assets/b3.png'),

      ],
      img: [

        require('../assets/b2.png'),


      ]
    }

  }


  render() {
    return (
      <View style={{
        backgroundColor: '#f6f6f6',
        width: '100%',
        flex: 1,
        resizeMode: 'contain',
      }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            resizeMode: 'contain',
          }}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
              <Image
                style={{ height: 50, width: 50, alignSelf: 'center', alignSelf: 'center' }}
                source={Assets.logoo}
              />
              <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', bottom: 6, paddingLeft: 10 }}>
                Helping Hands
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Icon style={{ marginHorizontal: 2 }}
                name="heart-outline"
                size={24}
                type="MaterialCommunityIcons" />
              <Icon style={{ marginHorizontal: 6, paddingRight: 6 }}
                name="bell-outline"
                size={24}
                type="MaterialCommunityIcons" />
            </View>
          </View>
        </View>

        <ScrollView  >
          <View style={{ backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.5, borderRadius: 6, width: '92%', alignSelf: 'center', height: 40, backgroundColor: '#f5f5f5', borderColor: '#e5e5e5' }}>
              <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 10 }}>
                <Icon style={{ paddingRight: 6, color: 'grey' }}
                  name="magnify"
                  size={20}
                  type="MaterialCommunityIcons" />
                <Text style={{ color: 'grey', fontSize: 14, fontWeight: '400', alignSelf: 'center', }}>
                  Search For Products
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Icon style={{ marginHorizontal: 6, paddingRight: 6, color: 'grey' }}
                  name="camera-wireless-outline"
                  size={20}
                  type="MaterialCommunityIcons" />
              </View>
            </View>
            <SliderBox

              images={this.state.images}
              sliderBoxHeight={160}
              dotColor="#ea0016"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              dotStyle={{
                width: 10,
                height: 10,
                backgroundColor: 'white',
              }}
              ImageComponentStyle={{
                alignSelf: 'center',

                width: '97%',
                marginTop: 15,
              }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 12, marginBottom: 6 }}>
              <Text style={{ color: 'grey', fontSize: 14, alignSelf: 'center', paddingLeft: 8 }}>
                Showing All Catlogs
              </Text>
              {/* <View style={{ flexDirection: 'row', alignSelf: 'center', paddingRight: 8 }}>
              <Icon style={{ marginHorizontal: 2, color: '#ea0016' }}
                name="filter-variant"
                size={20}
                type="MaterialCommunityIcons" />
              <Text style={{ fontSize: 12, alignSelf: 'center', color: '#ea0016' }}>
                Filter
          </Text>
          </View> */}
            </View>
          </View>


          <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 16 }}>
            <View style={{ borderWidth: 0.5, width: 60, alignSelf: 'center', marginHorizontal: 8, borderColor: '#ea0016' }}></View>
            <Text style={{ color: '#ea0016' }}>WHAT SERVICE DO YOU NEED</Text>
            <View style={{ borderWidth: 0.5, width: 60, alignSelf: 'center', marginHorizontal: 8, borderColor: '#ea0016' }}></View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Electricity')} style={styles.flatistview}>
              <Image source={Assets.electrician} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Electricians</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.props.navigation.navigate('plumber')} style={styles.flatistview}>
              <Image source={Assets.plumber} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Plumber</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.interior} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Interior / Decor</Text>


              </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.carpainter} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Carpainter</Text>


              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.laptop} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Computer / Laptop</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.camera} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>CCTV Camera</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.car} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Car / Bike Service</Text>


              </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.ac} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Ac Service & Repair</Text>


              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.painter} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Painter</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.appliance} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Appliance Repair</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.ro} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>RO Services</Text>


              </View>
            </TouchableOpacity>



            <TouchableOpacity style={styles.flatistview}>
              <Image source={Assets.home} style={styles.img} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.title}>Home Cleaning</Text>


              </View>
            </TouchableOpacity>
          </View>

          <SliderBox

            images={this.state.img}
            sliderBoxHeight={160}
            dotColor="#ea0016"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: 'white',
            }}
            ImageComponentStyle={{
              alignSelf: 'center',

              width: '97%',
              marginTop: 15,
            }}
          />






        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({

  flatistview: {
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 1,
    flexDirection: 'column',
    marginVertical: 4,
    padding: 5,
    elevation: 0.5,
    borderWidth: 0.1,
    marginHorizontal: 6,
    height: 95,
    width: 85
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 40,
    marginTop: 5,
    width: 40,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 10,
    color: 'black',
  },
  subtittle: { color: '#ea0016', paddingStart: 5, fontSize: 10 },
});

