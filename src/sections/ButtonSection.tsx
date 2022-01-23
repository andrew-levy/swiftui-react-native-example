import React, { useState } from 'react';
import { Button, Link, List, Text, useAlert } from 'swiftui-react-native';

export const ButtonSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  useAlert(showAlert, {
    title: 'SwiftUI is Cool',
    message: 'So is React Native!',
    buttons: [{ text: 'Cancel', onPress: () => setShowAlert(false) }],
  });
  return (
    <List inset header="Buttons">
      <Button action={() => setShowAlert(true)}>
        <Text alignment="leading">Button</Text>
      </Button>
      <Link destination="https://www.apple.com">
        <Text alignment="leading">Link</Text>
      </Link>
    </List>
  );
};
