import React from 'react';
import { List, Text, Font } from 'swiftui-react-native';
import { toWords } from '../utils';

/**
 * A list of SwiftUI Fonts
 */
export const FontSection = () => {
  return (
    <List inset header="Fonts + Text">
      {Object.keys(Font).map((font, i) => (
        <Text key={i} alignment="leading" font={font as keyof typeof Font}>
          {toWords(font)}
        </Text>
      ))}
    </List>
  );
};
