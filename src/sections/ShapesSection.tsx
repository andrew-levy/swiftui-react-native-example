import React from 'react';
import {
  Rectangle,
  // RoundedRectangle,
  // Capsule,
  Circle,
  HStack,
  VStack,
} from 'swiftui-react-native';

/**
 * A list of SwiftUI Shapesw
 */
export const ShapeSection = () => {
  return (
    <VStack spacing={5}>
      <HStack>
        <Circle frame={{ width: 30, height: 10 }} />
        <Rectangle frame={{ width: 100, height: 100 }} />
        <Circle fill="systemBlue" frame={{ width: 100, height: 100 }} />
      </HStack>
      <HStack>
        <Circle fill="systemRed" frame={{ width: 100, height: 100 }} />
        <Rectangle fill="systemGreen" frame={{ width: 100, height: 100 }} />
      </HStack>
    </VStack>
  );
};
