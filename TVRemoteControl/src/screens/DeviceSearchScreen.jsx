import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const DeviceSearchScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);
  const [deviceFound, setDeviceFound] = useState(false);

  useEffect(() => {
    // Start searching automatically
    startSearch();
  }, []);

  const startSearch = () => {
    setIsSearching(true);
    setSearchComplete(false);
    setDeviceFound(false);
    
    // Simulate search process
    setTimeout(() => {
      setIsSearching(false);
      setSearchComplete(true);
      // Randomly decide if device is found (for demo purposes)
      setDeviceFound(Math.random() > 0.5);
    }, 3000);
  };

  const handleRefresh = () => {
    startSearch();
  };

  const renderSearchContent = () => {
    if (isSearching) {
      return (
        <View style={styles.searchContainer}>
          <View style={styles.searchCircle}>
            <Ionicons name="search" size={60} color="#4A90E2" />
          </View>
          <Text style={styles.searchText}>Please make sure:</Text>
          <Text style={styles.instructionText}>1. Your phone and TV are on the same WiFi network.</Text>
          <Text style={styles.instructionText}>2. Your TV is turned on.</Text>
          <Text style={styles.instructionText}>3. The VPN on your phone is disconnected.</Text>
          <ActivityIndicator size="large" color="#4A90E2" style={styles.loader} />
        </View>
      );
    }

    if (searchComplete && !deviceFound) {
      return (
        <View style={styles.noDeviceContainer}>
          <Ionicons name="tv-outline" size={80} color="#bdc3c7" />
          <Text style={styles.noDeviceTitle}>Oops!</Text>
          <Text style={styles.noDeviceText}>No device found</Text>
          <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
            <Ionicons name="refresh" size={20} color="#fff" />
            <Text style={styles.refreshButtonText}>REFRESH</Text>
          </TouchableOpacity>
          <Text style={styles.instructionText}>Please make sure:</Text>
          <Text style={styles.instructionText}>1. Your phone and TV are on the same WiFi network.</Text>
          <Text style={styles.instructionText}>2. Your TV is turned on.</Text>
          <Text style={styles.instructionText}>3. The VPN on your phone is disconnected.</Text>
        </View>
      );
    }

    if (searchComplete && deviceFound) {
      return (
        <View style={styles.deviceFoundContainer}>
          <Ionicons name="checkmark-circle" size={80} color="#27ae60" />
          <Text style={styles.deviceFoundTitle}>Device Found!</Text>
          <Text style={styles.deviceFoundText}>Samsung Smart TV</Text>
          <TouchableOpacity style={styles.connectButton}>
            <Text style={styles.connectButtonText}>CONNECT</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.content}>
        {renderSearchContent()}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
  },
  noDeviceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDeviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  noDeviceText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  refreshButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  refreshButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deviceFoundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceFoundTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  deviceFoundText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
  },
  connectButton: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeviceSearchScreen;