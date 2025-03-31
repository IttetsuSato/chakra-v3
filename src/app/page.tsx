import { Button, HStack } from "@chakra-ui/react";

export default function Home() {
  // 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain'
  const vaiants = [
    "solid",
    "outline",
    "ghost",
  ] as const;

  return (
    <HStack padding={4} gap={4}>
      {vaiants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
      {/* <IconButton colorPalette="blue" variant="outline" aria-label="Search database">
        <LuSearch />
      </IconButton> */}
    </HStack>
  );
}
