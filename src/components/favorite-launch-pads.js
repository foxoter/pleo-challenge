import React from "react";
import { Stack, Text } from "@chakra-ui/core";
import { useFavoriteLaunchPads } from "../hooks/useFavoriteLaunchPads";
import FavoriteLaunchPad from "./favorite-launch-pad";

export default function FavoriteLaunchPads() {
  const { favLaunchPads, removeLaunchPad } = useFavoriteLaunchPads();

  if (favLaunchPads.length === 0) {
    return <Text>You have no favorite launch pads yet</Text>;
  }

  return (
    <Stack spacing={4} shouldWrapChildren>
      {favLaunchPads.map((item) => (
        <FavoriteLaunchPad
          key={item}
          launchPadId={item}
          onRemove={() => removeLaunchPad(item)}
        />
      ))}
    </Stack>
  );
}
