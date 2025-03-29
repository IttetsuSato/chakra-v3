import { Button, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <HStack padding={4} gap={4}>
      <Button colorPalette="blue">button</Button>
      <Button colorPalette="blue" variant="outline">button</Button>
      <Button colorPalette="blue" variant="surface">button</Button>
    </HStack>
  );
}
