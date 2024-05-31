import React from 'react';
import { TouchableOpacity, Image, View, Animated, Easing } from 'react-native';
import Main from '../main';
import Notifications from '../Notifications';
import Contacts from '../Contacts';

const App = () => {
  const SOS = require('./assets/SOS.png');
  const Notifications = require('./assets/notify.png');
  const Contacts = require('./assets/Log.png');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 1416 ,borderRadius: 50}}>
      <TouchableOpacity onPress={() => {Main}}>
        <Image source={SOS} style={{ width: 24, height: 24 }} />
        <Text>SOS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Notifications}}>
        <Image source={notify} style={{ width: 24, height: 24, marginLeft: 20 }} />
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Contacts}}>
        <Image source={Log} style={{ width: 50, height: 24, marginLeft: 20 }} />
        <text>Contacts</text>
      </TouchableOpacity>
    </View>
  );
};

export default App;