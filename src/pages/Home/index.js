import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



export default function Home({navigation}) {

const [altura, setAltura] = useState(new Animated.Value(40));
const [largura, setLargura] = useState(new Animated.Value(0));
const [eixoY, setEixoY] = useState(new Animated.Value(0));

Animated.sequence([
    Animated.timing(
        largura,
        {
            toValue:400,
            duration:2000
        }
    ),

    Animated.timing(
        altura,
        {
            toValue:550,
            duration:1000
        }
    )

]).start();





  return (
    <SafeAreaView>
    <Animated.View 
    style={[
        styles.header,
        {
            height:eixoY.interpolate({
            inputRange:[0, 60, 100],
            outputRange:[60, 0, 0],
            extrapolate:'clamp'  
        }),
            opacity:eixoY.interpolate({
            inputRange:[1, 75, 170],
            outputRange:[1, 1, 0],
            extrapolate:'clamp' 
        }),
        }
        ]}>
     <Image 
     source={require('../../../assets/img/logo.png')}
     style={{width:30, height:30}}
     resizeMode = "contain"
     />
    <Text style={{color:'#FFF', fontSize:17}}>Aplicativo React</Text>
    <TouchableOpacity
    onPress={() => navigation.navigate('Login')}
    >
        <Image 
     source={require('../../../assets/img/logout.png')}
     style={{width:30, height:30}}
     resizeMode = "contain"
         />
     </TouchableOpacity>
    </Animated.View>

    <ScrollView
    scrollEventThrottle={16}
    onScroll={
        Animated.event([{
            nativeEvent: {contentOffset:{y:eixoY}},

        }],
        {useNativeDriver:false}
        )
    }
    >
    <Animated.View style={{
         height:altura,
         width:largura,
         backgroundColor:'#dadadb',
         marginBottom:20
    }}>

    </Animated.View>

    <Animated.View style={{
         height:altura,
         width:largura,
         backgroundColor:'#dadadb',
         marginBottom:20
    }}>

    </Animated.View>
    </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
      backgroundColor:'#000',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10,
      borderBottomWidth:2,
      borderBottomColor:'#FFF',
      marginTop:35
  },
 
});
