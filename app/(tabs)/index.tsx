import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View className="bg-white flex-1 justify-center items-center h-full">
      <Text className="mb-2 text-red-500 font-bold">Hello world!</Text>
      <Button title="Click here" onPress={() => {alert('wahaha!')}}/>
    </View>
  );
}
