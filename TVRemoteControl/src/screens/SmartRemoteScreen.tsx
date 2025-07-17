import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Vibration,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type SmartRemoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SmartRemote'
>;

interface Props {
  navigation: SmartRemoteScreenNavigationProp;
}

const { width, height } = Dimensions.get('window');

const SmartRemoteScreen: React.FC<Props> = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(true);

  const handleButtonPress = (buttonName: string) => {
    Vibration.vibrate(50);
    console.log(`${buttonName} pressed`);
    // Here you would implement the actual Smart TV functionality
    Alert.alert('Button Pressed', `${buttonName} button was pressed`);
  };

  const handleAddRemote = () => {
    navigation.navigate('DeviceSearch');
  };

  const renderTopSection = () => (
    <View style={styles.topSection}>
      <TouchableOpacity style={styles.addRemoteButton} onPress={handleAddRemote}>
        <Text style={styles.addRemoteText}>ADD REMOTE</Text>
      </TouchableOpacity>
      
      <View style={styles.deviceInfo}>
        <View style={styles.deviceCard}>
          <Text style={styles.deviceTitle}>Samsung Smart TV</Text>
          <View style={styles.deviceStatus}>
            <View style={[styles.statusIndicator, { backgroundColor: isConnected ? '#27ae60' : '#e74c3c' }]} />
            <Text style={styles.statusText}>{isConnected ? 'Connected' : 'Disconnected'}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.installButton}>
          <Text style={styles.installButtonText}>CONNECTED</Text>
        </TouchableOpacity>
        
        <View style={styles.remoteIcon}>
          <Ionicons name="wifi" size={24} color="#27ae60" />
        </View>
      </View>
    </View>
  );

  const renderRemoteControl = () => (
    <View style={styles.remoteContainer}>
      {/* Power Button */}
      <TouchableOpacity 
        style={[styles.powerButton, styles.button]}
        onPress={() => handleButtonPress('Power')}
      >
        <Ionicons name="power" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Smart TV Controls */}
      <View style={styles.smartControlRow}>
        <TouchableOpacity 
          style={[styles.smartButton, styles.button]}
          onPress={() => handleButtonPress('Netflix')}
        >
          <Text style={styles.buttonText}>Netflix</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.smartButton, styles.button]}
          onPress={() => handleButtonPress('YouTube')}
        >
          <Text style={styles.buttonText}>YouTube</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.smartButton, styles.button]}
          onPress={() => handleButtonPress('Prime')}
        >
          <Text style={styles.buttonText}>Prime</Text>
        </TouchableOpacity>
      </View>

      {/* Volume and Channel Controls */}
      <View style={styles.controlRow}>
        <View style={styles.controlGroup}>
          <TouchableOpacity 
            style={[styles.controlButton, styles.button]}
            onPress={() => handleButtonPress('Volume Up')}
          >
            <Ionicons name="volume-high" size={20} color="#fff" />
            <Text style={styles.smallButtonText}>VOL+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.controlButton, styles.button]}
            onPress={() => handleButtonPress('Volume Down')}
          >
            <Ionicons name="volume-low" size={20} color="#fff" />
            <Text style={styles.smallButtonText}>VOL-</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.controlGroup}>
          <TouchableOpacity 
            style={[styles.controlButton, styles.button]}
            onPress={() => handleButtonPress('Channel Up')}
          >
            <Ionicons name="chevron-up" size={20} color="#fff" />
            <Text style={styles.smallButtonText}>CH+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.controlButton, styles.button]}
            onPress={() => handleButtonPress('Channel Down')}
          >
            <Ionicons name="chevron-down" size={20} color="#fff" />
            <Text style={styles.smallButtonText}>CH-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Pad */}
      <View style={styles.navPad}>
        <TouchableOpacity 
          style={[styles.navButton, styles.navUp]}
          onPress={() => handleButtonPress('Up')}
        >
          <Ionicons name="chevron-up" size={24} color="#fff" />
        </TouchableOpacity>
        
        <View style={styles.navMiddle}>
          <TouchableOpacity 
            style={[styles.navButton, styles.navLeft]}
            onPress={() => handleButtonPress('Left')}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.navButton, styles.navCenter]}
            onPress={() => handleButtonPress('OK')}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.navButton, styles.navRight]}
            onPress={() => handleButtonPress('Right')}
          >
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={[styles.navButton, styles.navDown]}
          onPress={() => handleButtonPress('Down')}
        >
          <Ionicons name="chevron-down" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Function Buttons */}
      <View style={styles.functionRow}>
        <TouchableOpacity 
          style={[styles.functionButton, styles.button]}
          onPress={() => handleButtonPress('Menu')}
        >
          <Ionicons name="menu" size={20} color="#fff" />
          <Text style={styles.smallButtonText}>MENU</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.functionButton, styles.button]}
          onPress={() => handleButtonPress('Home')}
        >
          <Ionicons name="home" size={20} color="#fff" />
          <Text style={styles.smallButtonText}>HOME</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.functionButton, styles.button]}
          onPress={() => handleButtonPress('Back')}
        >
          <Ionicons name="arrow-back" size={20} color="#fff" />
          <Text style={styles.smallButtonText}>BACK</Text>
        </TouchableOpacity>
      </View>

      {/* Media Controls */}
      <View style={styles.mediaRow}>
        <TouchableOpacity 
          style={[styles.mediaButton, styles.button]}
          onPress={() => handleButtonPress('Play/Pause')}
        >
          <Ionicons name="play" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.mediaButton, styles.button]}
          onPress={() => handleButtonPress('Stop')}
        >
          <Ionicons name="stop" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.mediaButton, styles.button]}
          onPress={() => handleButtonPress('Rewind')}
        >
          <Ionicons name="play-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.mediaButton, styles.button]}
          onPress={() => handleButtonPress('Fast Forward')}
        >
          <Ionicons name="play-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      {renderTopSection()}
      {renderRemoteControl()}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  addRemoteButton: {
    backgroundColor: '#4A90E2',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 15,
  },
  addRemoteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
  },
  deviceCard: {
    flex: 1,
  },
  deviceTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  deviceStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
  installButton: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  installButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  remoteIcon: {
    padding: 10,
  },
  remoteContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  powerButton: {
    backgroundColor: '#e74c3c',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  smartControlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smartButton: {
    backgroundColor: '#8e44ad',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  controlGroup: {
    flex: 1,
    marginHorizontal: 10,
  },
  controlButton: {
    backgroundColor: '#34495e',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navPad: {
    alignItems: 'center',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#34495e',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navUp: {
    marginBottom: 10,
  },
  navMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  navLeft: {
    marginRight: 10,
  },
  navCenter: {
    marginHorizontal: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  navRight: {
    marginLeft: 10,
  },
  navDown: {},
  functionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  functionButton: {
    backgroundColor: '#34495e',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 60,
  },
  mediaRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  mediaButton: {
    backgroundColor: '#2980b9',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SmartRemoteScreen;