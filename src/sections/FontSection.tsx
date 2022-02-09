import React from 'react';
import { ForEach, List, Text } from 'swiftui-react-native';
import { toWords } from '../utils';

const fonts = [
  'largeTitle',
  'title',
  'title2',
  'title3',
  'headline',
  'body',
  'callout',
  'subheadline',
  'footnote',
  'caption',
  'caption2',
];
/**
 * A list of SwiftUI Fonts
 */
export const FontSection = () => {
  return (
    <List inset header="Fonts + Text">
      {ForEach(fonts, (font, i) => (
        // @ts-ignore
        <Text key={i} alignment="leading" font={font}>
          {toWords(font)}
        </Text>
      ))}
    </List>
  );
};
