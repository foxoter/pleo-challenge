import React from "react";
import { Badge, Stack, Text } from "@chakra-ui/core";
import { getRocketHighlightContent } from "../utils/rocket-item";

export default function RocketItemHighlight({ higlight, rocket }) {
  const { text, badge, caption } = getRocketHighlightContent(higlight, rocket);

  return (
    <>
      <Stack direction="row" alignItems="baseline">
        <Text fontSize="sm" as="u" mb="1">
          {text}
        </Text>
        <Badge variantColor="purple">{badge}</Badge>
      </Stack>
      {caption && (
        <Text color="gray.500" fontSize="sm">
          {caption}
        </Text>
      )}
    </>
  );
}
