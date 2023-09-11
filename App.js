import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';
import Button from './components/button';

const PlaceholderImage = require('./assets/background.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      <Text style={styles.baseText}>Some Cool App with buttons</Text>
      
      <View style={styles.footerContainer}>
        <Button label="Button A" />
        <Button label="Button B" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 0,
  },
  baseText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 50
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
