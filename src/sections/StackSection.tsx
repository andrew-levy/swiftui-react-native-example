import React from 'react';
import {
  HStack,
  Image,
  List,
  Spacer,
  Text,
  useUIColor,
  VStack,
  ZStack,
} from 'swiftui-react-native';

export const StackSection = () => {
  const UIColor = useUIColor();
  return (
    <List inset header="Stacks">
      <HStack>
        <Text font="body">HStack</Text>
        <Spacer />
        <Text font="body">HStack</Text>
        <Spacer />
        <Text font="body">HStack</Text>
      </HStack>
      <VStack>
        <Text font="body">VStack</Text>
        <Spacer />
        <Text font="body">VStack</Text>
        <Spacer />
        <Text font="body">VStack</Text>
      </VStack>
      <ZStack
        frame={{ width: 100, height: 100 }}
        style={{ alignSelf: 'center' }}>
        <Image systemName="circle.fill" fontSize={100} />
        <Image
          systemName="circle.fill"
          foregroundColor={UIColor.systemTeal}
          fontSize={50}
        />
        <Text foregroundColor="white" fontWeight="bold">
          ZStack
        </Text>
      </ZStack>
    </List>
  );
};
