import React from 'react';
import { View } from 'react-native';
import { List, Text, useUIColor, HStack, ForEach } from 'swiftui-react-native';
import { toWords } from '../utils';

export const ColorSection = () => {
  const UIColor = useUIColor();
  const bgFg = Object.keys(UIColor).filter((_, i) => i < 10);
  const colors = Object.keys(UIColor).filter((_, i) => i >= 10 && i < 19);
  const grays = Object.keys(UIColor).filter((_, i) => i >= 19);

  return (
    <>
      <List inset header="System Background + Foreground">
        {ForEach(bgFg, (color, i) => (
          <HStack key={i} spacing={5}>
            <Swatch color={color} />
            <Text alignment="leading">{toWords(color)}</Text>
          </HStack>
        ))}
      </List>
      <List inset header="System Colors">
        {ForEach(colors, (color, i) => (
          <HStack key={i} spacing={5}>
            <Swatch color={color} />
            <Text alignment="leading">{toWords(color)}</Text>
          </HStack>
        ))}
      </List>
      <List inset header="System Grays">
        {ForEach(grays, (color, i) => (
          <HStack key={i} spacing={5}>
            <Swatch color={color} />
            <Text alignment="leading">{toWords(color)}</Text>
          </HStack>
        ))}
      </List>
    </>
  );
};

const Swatch = ({ color }: { color: string }) => {
  const UIColor = useUIColor();
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: UIColor.systemGray5,
        //@ts-ignore
        backgroundColor: UIColor[color],
      }}
    />
  );
};
