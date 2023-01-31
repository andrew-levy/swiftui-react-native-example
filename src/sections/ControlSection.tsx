import React from "react";
import {
  VStack,
  HStack,
  List,
  Slider,
  Spacer,
  Stepper,
  Text,
  Toggle,
  useBinding,
  useEnvironment,
} from "swiftui-react-native";

export const ControlSection = () => {
  const { colorScheme, setValues } = useEnvironment();
  const sliderValue = useBinding(0);
  const stepperValue = useBinding(0);
  const toggleValue = useBinding(colorScheme === "dark");

  return (
    <List inset header="Controls">
      <VStack>
        <HStack>
          <Text font="body">Slider</Text>
          <Spacer />
          <Text font="body" foregroundColor="systemBlue">
            {Math.round(sliderValue.value)}
          </Text>
        </HStack>
        <Slider
          value={sliderValue}
          trackTint="accentColor"
          thumbTint="blue"
          range={[0, 20]}
        />
      </VStack>
      <VStack>
        <HStack>
          <Text font="body">Stepper</Text>
          <Spacer />
          <Text font="body" foregroundColor="systemBlue">
            {stepperValue.value}
          </Text>
        </HStack>
        <VStack padding={10}>
          <Stepper
            value={stepperValue}
            range={[0, 10]}
            backgroundColor="systemGray5"
            onChange={console.log}
          />
        </VStack>
      </VStack>
      <VStack>
        <HStack>
          <Text font="body">Toggle</Text>
          <Spacer />
          <Text foregroundColor="systemBlue" font="body">
            {toggleValue.value ? "On" : "Off"}
          </Text>
        </HStack>
        <VStack padding={10}>
          <Toggle
            isOn={toggleValue}
            onChange={() =>
              setValues({ colorScheme: toggleValue.value ? "light" : "dark" })
            }
          />
        </VStack>
      </VStack>
    </List>
  );
};
