import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/index';
import { LinearGradient } from 'expo-linear-gradient';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const { width } = Dimensions.get('window');

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate('RemoteSelection');
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
          <View style={styles.remoteContainer}>
            <View style={styles.remote}>
              <View style={styles.remoteButton} />
              <View style={styles.remoteButton} />
              <View style={styles.remoteButton} />
              <View style={styles.remoteButton} />
            </View>
          </View>
        </View>
        
        <Text style={styles.title}>ROKU TV REMOTE</Text>
        
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  tvContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  tvScreen: {
    width: width * 0.6,
    height: width * 0.35,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
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
  remoteContainer: {
    alignItems: 'center',
  },
  remote: {
    width: 60,
    height: 120,
    backgroundColor: '#2c3e50',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  remoteButton: {
    width: 25,
    height: 25,
    backgroundColor: '#34495e',
    borderRadius: 12.5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;