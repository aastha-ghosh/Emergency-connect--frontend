import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, DropDownPicker} from 'react-native';
import profile from './profile';
import Hnecs from './Componets/Hnecs'
import AlertDetailsPage from './alertdetailspage';

const Main = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width: 100, height: 100, borderRadius: 50, backgroundColor: 'yellow'}} onPress={AlertDetailsPage}>
        <Text style={{color:'orange', fontSize: 30}}>SOS</Text>
      </TouchableOpacity>
      <DropDownPicker
        items={[
         {label: '1', value: 'Accident'},
         {label: '2', value: 'Fire'},
         {label: '3', value: 'Robbery'},
        ]}
        defaultValue={''}
        placeholder="Select Emergency"
        containerStyle={{height: 40}}
        style={{backgroundColor: 'gray'}}
        itemStyle={{
         justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: 'gray'}}
        onChangeItem={item => console.log(item.label, item.value)}
        />
      <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}} onPress={profile}>
        <Text style={{color: 'grey', fontSize: 30}}>P</Text>
      </TouchableOpacity>
      <Hnecs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

export default Main;