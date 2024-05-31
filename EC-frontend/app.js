import * as React from "react";
import { Text,View,Button,Navigation,StyleSheet,TouchableOpacity } from "react-native/types";
import loginInfo from './logininfo';
const App = () => {
    return (
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
            Emergency Connect
          </Text>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            Quick Response, Saves Lives
          </Text>
          <TouchableOpacity style={{backgroundColor: 'black', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 20}} onPress={(loginInfo)}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
    );
};

export default App;