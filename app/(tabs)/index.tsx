import { Image, StyleSheet, Platform, View, Text, Button, Pressable, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function HomeScreen() {
  return (
    <View
      className='flex-1 w-full items-center justify-center bg-blue-400'
    >
      <View className='px-4 w-full max-w-sm'>
        <Text className='text-5xl font-bold mb-6 text-gray-50'>
          Login
        </Text>

        <View className='flex flex-col gap-4'>
          <TextInput className='dark:text-white' placeholder="  Enter email address" />
          <TextInput className='dark:text-white' placeholder="  Enter password" />
        </View>

        <View className='flex flex-row justify-between items-center my-8'>
          <View className='flex-row items-center'>
            <Pressable
              className='bg-gray-50 h-6 w-6 rounded-sm mr-2'
            >
            </Pressable>
            <Text className='text-gray-50'>Remember me</Text>
          </View>
          <Pressable>
            <Text className='text-gray-50 font-bold'>Reset password</Text>
          </Pressable>
        </View>

        <Button title="Login" />
      </View>
    </View>
  );
}
