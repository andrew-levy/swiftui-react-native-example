import React from 'react';
import { View, ScrollView, StatusBar, StyleSheet } from 'react-native';
import {
  EnvironmentProvider,
  Text,
  useEnvironment,
  useUIColor,
} from 'swiftui-react-native';
import { ButtonSection } from './sections/ButtonSection';
import { ColorSection } from './sections/ColorSection';
import { ControlSection } from './sections/ControlSection';
import { FontSection } from './sections/FontSection';
import { ImageSection } from './sections/ImageSection';
import { StackSection } from './sections/StackSection';
import { TextFieldSection } from './sections/TextFieldSection';

/**
 * This is a demo app that displays all of the components offered by the library.
 * To present them nicely, each section is wrapped in a List view, but they are not
 * required to be.
 */
export default function App() {
  return (
    // Wrap the app in a EnvironmentProvider to enable light/dark mode by default
    <EnvironmentProvider>
      <Examples />
    </EnvironmentProvider>
  );
}

const Examples = () => {
  // Get the current color scheme

  const { colorScheme } = useEnvironment();
  // Get the current UIColor palette for styling components outside of swiftui-react-native
  const UIColor = useUIColor();
  return (
    <View style={[styles.container, { backgroundColor: UIColor.systemGray6 }]}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text padding={20} alignment="leading" font="title" bold>
          SwiftUI React Native
        </Text>
        <FontSection />
        <ButtonSection />
        <ControlSection />
        <ImageSection />
        <TextFieldSection />
        <StackSection />
        <ColorSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
  },
  contentContainerStyle: { paddingBottom: 50 },
});
