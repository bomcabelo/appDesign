import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/ListItem';


function edit(){
    alert('Executando a funcao editar');
}

export default function Usuarios({route}) {

    const usuarios = [
        {id: '1', nome:'Hugo Vasconcelos'},
        {id: '2', nome:'Fábio Vasconcelos'},
        {id: '3', nome:'Pedro Freitas'},
        {id: '4', nome:'Marcos Silva'},
        {id: '5', nome:'Paloma Santos'},
    ]

  return (
    <SafeAreaView>
    <View 
    style={styles.header}>
     <Image 
     source={require('../../../assets/img/logo.png')}
     style={{width:30, height:30}}
     resizeMode = "contain"
     />
    <Text style={{color:'#FFF', fontSize:17}}>Lista de Usuários</Text>
    <Image 
     source={require('../../../assets/img/logout.png')}
     style={{width:30, height:30}}
     resizeMode = "contain"
     />
    </View>

    <View>
        <FlatList
            data={usuarios}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <ListItem
                data={item}
                deletar = {()=> alert('Deletar')}
                editar = {()=> edit()}
            />
            )}
            ItemSeparatorComponent={()=><Separator/>}
            
        >

        </FlatList>
    </View>

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

const Separator = () => <View style={{flex:1, height:1, backgroundColor:'#DDD'}}></View>
