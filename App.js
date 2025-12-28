import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  // Fontları yüklüyoruz [cite: 30]
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'), // [cite: 31]
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'), // [cite: 32]
  });

  // Fontlar yüklenene kadar boş bir ekran döndür [cite: 34, 35]
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fonts Loaded!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // [cite: 48]
    alignItems: 'center',     // [cite: 49]
  },
  text: {
    fontFamily: 'MontserratBold', // Ödevde belirtilen font ismi [cite: 53]
    fontSize: 24,                // [cite: 54]
  },
});