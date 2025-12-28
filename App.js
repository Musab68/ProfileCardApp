import { useFonts } from 'expo-font';
import ProfileScreen from './screens/ProfileScreen'; // Yeni oluşturduğumuz ekranı çağırıyoruz [cite: 149]

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Artık ana ekranda ProfileScreen bileşenini döndürüyoruz [cite: 159]
  return <ProfileScreen />;
}