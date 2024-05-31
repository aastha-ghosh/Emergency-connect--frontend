import React from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity} from  "react-native/types";
import App from "./app";
import myalerts from "./myalerts";

const Profile = () => {
    return(
        <view style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        
        <TouchableOpacity style={{}} onPress={() => navigation.navigate('editprofile')}>
            <text style={{color:'black', textDecorationLine:'underline',alignItems:'center', fontSize: 16}}>Edit Profile</text>
        </TouchableOpacity>
        
        <Text style={styles.Textbox}>
            Name: Aastha Ghosh {'\n'}
            Phone No: +91-9016065853 {'\n'}
            Blood Group: A+ {'\n'}
            DOB: 17-08-2003 {'\n'}
            Email: aasthaghosh@gmail.com{'\n'}
            Gender: Female
        </Text>

        <TouchableOpacity style={{backgroundColor: 'grey', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 20}} onPress={myalerts}>
            <Text style={{color:'black'}}>My Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{}} onPress={App}>
            <text style={{color:'black', textDecorationLine:'underline',alignItems:'center', fontSize: 16, marginBottom: 20}}>Logout</text>
        </TouchableOpacity>

        </view>
    )
};

const styles = StyleSheet.create({
    Textbox: {
        fontSize: 16, 
        marginTop: 5
    }
});

export default Profile; 