import React from "react";
import { Stack, Text } from "@chakra-ui/core";
import { useFavoriteLaunchPads } from "../hooks/useFavoriteLaunchPads";
import FavoriteLaunchPad from "./favorite-launch-pad";

export default function FavoriteLaunchPads() {
  const { favLaunchPadIds, removeLaunchPad } = useFavoriteLaunchPads();

  if (favLaunchPadIds.length === 0) {
    return <Text>You have no favorite launch pads yet</Text>;
  }

  const handleRemove = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    removeLaunchPad(id);
  }

  return (
    <Stack spacing={4} shouldWrapChildren>
      {favLaunchPadIds.map((id) => (
        <FavoriteLaunchPad
          key={id}
          launchPadId={id}
          onRemove={(e) => handleRemove(e, id)}
        />
      ))}
    </Stack>
  );
}
