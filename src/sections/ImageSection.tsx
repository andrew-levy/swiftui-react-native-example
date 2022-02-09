import React from 'react';
import { ForEach, HStack, Image, List } from 'swiftui-react-native';

export const ImageSection = () => {
  const sfSymbols = [
    { name: 'trash', color: 'systemOrange' as const },
    { name: 'plus', color: 'systemBlue' as const },
    { name: 'phone', color: 'systemPurple' as const },
    { name: 'arrow.right', color: 'systemGreen' as const },
    { name: 'person.fill', color: 'systemTeal' as const },
  ];

  return (
    <>
      {/* Images using a URI as a source */}
      <List inset header="Images (URI + Assets)">
        <HStack spacing={6}>
          {ForEach(Array(5).fill(0), (_, i) => (
            <Image
              key={i}
              source={{ uri: 'https://picsum.photos/200/300/?random' }}
              frame={{ width: 50, height: 50 }}
              cornerRadius={100}
            />
          ))}
        </HStack>
      </List>
      {/* SF Symbols */}
      <List inset header="Images (SF Symbols)">
        <HStack spacing={6}>
          {ForEach(sfSymbols, (symbol, i) => (
            <Image
              key={i}
              systemName={symbol.name}
              foregroundColor={symbol.color}
              fontSize={50}
            />
          ))}
        </HStack>
      </List>
    </>
  );
};
