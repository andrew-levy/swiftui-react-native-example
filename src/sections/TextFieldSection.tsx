import React from 'react';
import { List, TextField, useBinding } from 'swiftui-react-native';

export const TextFieldSection = () => {
  const text = useBinding('');
  return (
    <List inset header="Text Field">
      <TextField placeholder="Enter your name" text={text} />
    </List>
  );
};
