import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Vibration,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/index';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type IRRemoteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'IRRemote'
>;

interface Props {
  navigation: IRRemoteScreenNavigationProp;
}

const { width, height } = Dimensions.get('window');

const IRRemoteScreen: React.FC<Props> = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(false);

  const handleButtonPress = (buttonName: string) => {
    Vibration.vibrate(50);
    console.log(`${buttonName} pressed`);
    Alert.alert('Button Pressed', `${buttonName} button was pressed`);
  };

  const handleAddRemote = () => {
    navigation.navigate('DeviceSearch');
  };

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.addRemoteButton} onPress={handleAddRemote}>
            <Text style={styles.addRemoteText}>ADD REMOTE</Text>
          </TouchableOpacity>
          
          <View style={styles.deviceInfo}>
            <View style={styles.deviceCard}>
              <Text style={styles.deviceTitle}>Roku TV Remote</Text>
              <View style={styles.deviceStatus}>
                <View style={styles.statusIndicator} />
                <Ionicons name="volume-mute" size={20} color="#666" />
              </View>
            </View>
            
            <TouchableOpacity style={styles.installButton}>
              <Text style={styles.installButtonText}>INSTALL</Text>
            </TouchableOpacity>
            
            <View style={styles.remoteIcon}>
              <Ionicons name="phone-portrait" size={24} color="#666" />
            </View>
          </View>
        </View>

        {/* Remote Control */}
        <View style={styles.remoteContainer}>
          {/* Power Button */}
          <TouchableOpacity 
            style={[styles.powerButton, styles.button]}
            onPress={() => handleButtonPress('Power')}
          >
            <Ionicons name="power" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Volume and Channel Controls */}
          <View style={styles.controlRow}>
            <View style={styles.controlGroup}>
              <TouchableOpacity 
                style={[styles.controlButton, styles.button]}
                onPress={() => handleButtonPress('Volume Up')}
              >
                <Text style={styles.buttonText}>VOL+</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.controlButton, styles.button]}
                onPress={() => handleButtonPress('Volume Down')}
              >
                <Text style={styles.buttonText}>VOL-</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.controlGroup}>
              <TouchableOpacity 
                style={[styles.controlButton, styles.button]}
                onPress={() => handleButtonPress('Channel Up')}
              >
                <Text style={styles.buttonText}>CH+</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.controlButton, styles.button]}
                onPress={() => handleButtonPress('Channel Down')}
              >
                <Text style={styles.buttonText}>CH-</Text>
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
              <Text style={styles.buttonText}>MENU</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.functionButton, styles.button]}
              onPress={() => handleButtonPress('Home')}
            >
              <Ionicons name="home" size={20} color="#fff" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.functionButton, styles.button]}
              onPress={() => handleButtonPress('Back')}
            >
              <Ionicons name="arrow-back" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Number Pad */}
          <View style={styles.numberPad}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <TouchableOpacity 
                key={number}
                style={[styles.numberButton, styles.button]}
                onPress={() => handleButtonPress(number.toString())}
              >
                <Text style={styles.buttonText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
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
    backgroundColor: '#27ae60',
    marginRight: 10,
  },
  installButton: {
    backgroundColor: '#4A90E2',
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 60,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  numberButton: {
    backgroundColor: '#34495e',
    width: (width - 60) / 3 - 10,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IRRemoteScreen;