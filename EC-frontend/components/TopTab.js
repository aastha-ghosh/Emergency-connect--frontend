import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Nearby from '../Alerts/Nearby';
import Accepted from '../Alerts/Accepted';
import Completed from '../Alerts/Complted';

const TopTab = () => {
    <text style={{width: 62, height: 12, top:47, left: 184}}>Alert</text>
  const [selectedTab, setSelectedTab] = useState('nearby');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.topTab}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'nearby' && styles.tabButtonSelected,
          ]}
          onPress={Nearby}
        >
          <Text style={styles.tabButtonText}>Nearby</Text>
          {selectedTab === 'nearby' && <View style={styles.tabDot} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'accepted' && styles.tabButtonSelected,
          ]}
          onPress={Accepted}
        >
          <Text style={styles.tabButtonText}>Accepted</Text>
          {selectedTab === 'accepted' && <View style={styles.tabDot} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'completed' && styles.tabButtonSelected,
          ]}
          onPress={Completed}
        >
          <Text style={styles.tabButtonText}>Completed</Text>
          {selectedTab === 'completed' && <View style={styles.tabDot} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topTab: {
    position: 'absolute',
    top: 100,
    left: 84,
    zIndex: 100,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-around',
    gap: 24
  },
  tabButton: {
    borderWidth: 0,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#333',
  },
  tabButtonSelected: {
    color: 'orange',
  },
  tabDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
    position: 'absolute',
    right: -20,
    top: 25,
  },
});

export default TopTab;