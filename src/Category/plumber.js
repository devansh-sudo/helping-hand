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

export default class Plumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                require('../assets/plumber1.jpg'),
                require('../assets/plumber2.jpg'),
                require('../assets/toilet1.jpg'),
               


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
                        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginLeft: 110 }}>Plumber</Text>
                    </View>

                </View>


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
                                <Image source={Assets.fitting} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Home Fitting</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.repair} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Repairing</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.drain } style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Drainage / Blocking</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.tank} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Water tank</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.moter} style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Moter</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.flatistview}>
                                <Image source={Assets.toilet } style={styles.img} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Toilet</Text>
                            </View>
                        </View>
                    </View>

                     
                
                </ScrollView>

            </View>
        );
    }

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





