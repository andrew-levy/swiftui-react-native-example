import React from "react";
import { Button, Link, List, useBinding } from "swiftui-react-native";

export const ButtonSection = () => {
  const showAlert = useBinding(false);
  return (
    <List
      inset
      header="Buttons"
      alert={{
        isPresented: showAlert,
        title: "SwiftUI is Cool",
        message: "So is React Native!",
        actions: [{ title: "Cancel" }],
      }}
    >
      <>
        <Button
          buttonStyle="bordered"
          title="Bordered"
          action={showAlert.toggle}
        />
      </>
      <>
        <Button
          buttonStyle="borderless"
          title="Borderless"
          action={showAlert.toggle}
        />
      </>
      <>
        <Button
          buttonStyle="borderedProminent"
          title="Bordered Prominent"
          action={showAlert.toggle}
        />
      </>
      <>
        <Button buttonStyle="plain" title="Plain" action={showAlert.toggle} />
      </>
      <Button
        buttonStyle="borderless"
        title="List Item"
        action={showAlert.toggle}
      />
      <>
        <Link title="Link" destination="https://www.apple.com" />
      </>
    </List>
  );
};
