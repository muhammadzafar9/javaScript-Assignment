import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const RemoteSelectionScreen = ({ navigation }) => {
  const handleIRRemote = () => {
    navigation.navigate('IRRemote');
  };

  const handleSmartRemote = () => {
    navigation.navigate('SmartRemote');
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.tvContainer}>
          <View style={styles.tvScreen}>
            <LinearGradient
              colors={['#ff9a9e', '#fecfef', '#fecfef']}
              style={styles.tvGradient}
            />
          </View>
        </View>
        
        <Text style={styles.title}>Choose the type of your TV remote</Text>
        
        <TouchableOpacity style={styles.optionButton} onPress={handleIRRemote}>
          <View style={styles.optionContent}>
            <Ionicons name="tv" size={24} color="#fff" />
            <Text style={styles.optionText}>IR TV Remote</Text>
            <Ionicons name="help-circle" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionButton} onPress={handleSmartRemote}>
          <View style={styles.optionContent}>
            <Ionicons name="tv" size={24} color="#fff" />
            <Text style={styles.optionText}>Smart TV Remote</Text>
            <Ionicons name="help-circle" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.dontKnowButton}>
          <Text style={styles.dontKnowText}>I don't know</Text>
        </TouchableOpacity>
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
  tvContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  tvScreen: {
    width: width * 0.5,
    height: width * 0.3,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tvGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  optionButton: {
    backgroundColor: '#e74c3c',
    width: width * 0.8,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 15,
  },
  dontKnowButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dontKnowText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default RemoteSelectionScreen;