import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Button, ImageBackground, Alert } from 'react-native';

const styles = {
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  logoImage: {
    width: 240,
    height: 240,
    resizeMode: 'center'
  },
  ctaButton: {
    backgroundColor: '#7BC8F7',
    color: 'white'
  }
}

const Inicio = ({ navigation }) => {
  return (
      <View style={{flex:1}}>
        <View style={{flexGrow:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.mainTitle}>Instituto Tecnológico de Colima</Text>
          <Image style={styles.logoImage} source={require('./assets/logo.png')} />
          <Text>Ingeniería en Informática</Text>
          <Text>Práctica #1</Text>
          <Text style={{ color: 'blue' }}>Jorge Armando Novela</Text>
          <Text>MARZO-JUNIO 2021</Text>
        </View>
        <Button style={styles.ctaButton} title="Entrar"
          onPress={()=>navigation.navigate('segunda')}/>
      </View>
  );
};

const SegundaPantalla = () => {
  return (
    <View>
      <Text>Segunda pantalla</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={Inicio} options={{title:'Página principal'}} />
        <Stack.Screen name="segunda" component={SegundaPantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

/*

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component, useState} from 'react'
import {View, Text, Image, Button, Alert} from 'react-native'

const style = {
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  logoImage: {
    width: 240,
    heigth: 240,
    resizeMode: 'center'
  },
  ctaButton: {
    backgroundColor: '#7BC8F7',
    color: 'white'
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DatailsScreen({ navigation }) {
  return(
    <View style={{ flex:Q, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <Button 
        title="Go to details... again"
        onPress={() => navigation.push('Details')}
      />

      <Button title="Go back" onPress={() => navigation.goBack()}/>

      <Button 
        title="Go back to first screen in stack"
        onPress={() => navigation.push('Details')}
      />
    </View>
  )
}

const Inicio = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
      <View style={{flexGrow:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.mainTitle}>Instituto Tecnológico de Colima</Text>
        <image style={styles.logoImage} source={require('./assets/logo.png')} />
        <Text>Licenciatura en Informática</Text>
        <Text>09290328</Text>
        <Text style={{ color: 'blue'}}>Jorge Armando Novela Vega</Text>
        <Text>MARZO-JUNIO 2021</Text>
      </View> 
      <Button style={styles.ctaButton} title="Entrar"
        onPress={()=>navigation.navigate('segunda')}/>
    </View>
  );
};

const SegundaPantalla = () => {
  return (
    <View>
      <Text>Segunda pantalla</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigation>
        <Stack.Screen name="Inicio" component={Inicio} options={{title: 'Inicio'}}/>
        <Stack.Screen name="Segunda" component={SegundaPantalla}/>
      </Stack.Navigation>
    </NavigationContainer>
  )
}

export default practica1

*/