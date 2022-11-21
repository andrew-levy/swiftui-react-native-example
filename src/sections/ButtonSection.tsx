import React from 'react';
import { Button, Link, List, Text, useBinding } from 'swiftui-react-native';

export const ButtonSection = () => {
  const showAlert = useBinding(false);
  return (
    <List inset header="Buttons">
      <Button
        action={showAlert.toggle}
        alert={{
          isPresented: showAlert,
          title: 'SwiftUI is Cool',
          message: 'So is React Native!',
          actions: [{ title: 'Cancel' }],
        }}>
        <Text alignment="leading">Button</Text>
      </Button>
      <Link destination="https://www.apple.com">
        <Text alignment="leading">Link</Text>
      </Link>
    </List>
  );
};
