import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/index';
import { LinearGradient } from 'expo-linear-gradient';

type LoadingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loading'>;

interface Props {
  navigation: LoadingScreenNavigationProp;
}

const { width } = Dimensions.get('window');

const LoadingScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        <Text style={styles.loadingText}>Loading...</Text>
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
  loader: {
    marginVertical: 20,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoadingScreen;