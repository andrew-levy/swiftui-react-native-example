import React from 'react';
import {
  List,
  Text,
  HStack,
  VStack,
  UIColor,
  useUIColor,
} from 'swiftui-react-native';
import { toWords } from '../utils';

export const ColorSection = () => {
  const UIColors = useUIColor();
  return (
    <>
      <List inset header="Colors">
        {Object.keys(UIColors).map((color, i) => (
          <HStack key={i} spacing={5}>
            <Swatch color={color as UIColor} />
            <Text alignment="leading">{toWords(color)}</Text>
          </HStack>
        ))}
      </List>
    </>
  );
};

const Swatch = ({ color }: { color: UIColor }) => {
  return (
    <VStack
      frame={{ width: 20, height: 20 }}
      cornerRadius={6}
      border={{ width: 1, color: 'systemGray5' }}
      backgroundColor={color}
    />
  );
};
