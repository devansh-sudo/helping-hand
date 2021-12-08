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

import LinearGradient from 'react-native-linear-gradient'
const deviceWidth = Dimensions.get('window').width;

export default class Electricity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                require('../assets/lighting3.jpg'),
                require('../assets/heater2.jpg'),
                require('../assets/electrician.jpg'),
               


            ],

        }

    }


    render() {
        return (
            <View style={{
                backgroundColor: '#f5f5f5',
                width: '100%',
                flex: 1,
                resizeMode: 'contain',
            }}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <View
                    backgroundColor='#fff'


                    style={{

                        height: 45,
                        width: '100%',
                        alignSelf: 'center',
                    }}

                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon     onPress={() => this.props.navigation.navigate('Home')} style={{ marginLeft: 8, marginTop: 1 }}
                            name="chevron-left"
                            size={35}
                            color={'black'}
                            type="MaterialCommunityIcons" />
                        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginLeft: 99 }}>Electricians</Text>
                    </View>

                </View>

                {/* <TouchableOpacity  
        onPress={() => this.props.navigation.navigate('Electricity')} style={styles.flatistview}>
      <Image source={Assets.electrician} style={styles.img} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         
          <Text style={styles.title}>Home Wiring</Text>
         
      </View>
  </TouchableOpacity>
        */}
                <ScrollView>
                    <SliderBox

                        images={this.state.images}
                        sliderBoxHeight={200}
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
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.wiring} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Home Wiring</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.switch3} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Switch Boards</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.fan } style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Fan Repairing</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.heater} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Room Heater</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.switch3} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Inverter / Stablizer</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.telivision } style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Television</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.lighting2} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Lighting</Text>
                            </View>
                        </View>
 
                    </View>
                    {/* <View style={{ marginHorizontal: 10, }}>
                        <FlatList
                            data={[
                                {
                                    image: require('../assets/wiring2.jpg'),
                                    title: 'Home Wiring',
                                },
                                {
                                    image: require('../assets/switch3.jpg'),
                                    title: 'Switch Boards',
                                },
                                {
                                    image: require('../assets/fan.jpg'),
                                    title: 'Fan Repairing',
                                },
                                {
                                    image: require('../assets/heater.jpg'),
                                    title: 'Room Heater',
                                },
                                {
                                    image: require('../assets/inverter.jpg'),
                                    title: 'Inverter / Stablizer ',
                                },
                                {
                                    image: require('../assets/telivision.jpg'),
                                    title: 'Television',
                                },
                                {
                                    image: require('../assets/lighting2.jpg'),
                                    title: 'Lighting',
                                },


                            ]}
                            vertical
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={this.renderItem}
                            keyExtractor={(item, i) => i.toString()}
                        />
                    </View> */}
                </ScrollView>

            </View>
        );
    }



    // renderItem = ({ item, index }) => (
    //     <View style={{ flexDirection: 'column' }}>
    //         <View style={styles.flatistview}>

    //             <Image source={item.image} style={styles.img} />

    //         </View>

    //         <TouchableOpacity>
    //             <Text style={styles.title}>{item.title}</Text>
    //         </TouchableOpacity>
    //     </View>

    // );
}




const styles = StyleSheet.create({

    flatistview: {
        marginHorizontal: 18,
        marginVertical: 5,

        marginTop: 20,
        backgroundColor: 'white',
        elevation: 0.5,
        alignSelf: 'center',

        borderRadius: 360,


        height: 90,
        width: 90
    },
    img: {

        alignSelf: 'center',
        height: 90,
        marginTop: 5,
        bottom: 5,

        borderRadius: 65,
        width: 90,

    },
    title: {
        fontWeight: 'bold',

        fontSize: 14,
        color: 'black',
        alignSelf: 'center',
        marginTop: 5,
        marginVertical: 10
    },
    subtittle: { color: '#ea0016', paddingStart: 5, fontSize: 10 },
});





