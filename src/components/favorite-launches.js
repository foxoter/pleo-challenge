import React from "react";
import { Stack, Text } from "@chakra-ui/core";

import { useFavoriteLaunches } from "../hooks/useFavoriteLaunches";
import FavoriteLaunch from "./favorite-launch";

export default function FavoriteLaunches() {
  const { removeLaunch, favLaunches } = useFavoriteLaunches();

  if (favLaunches.length === 0) {
    return <Text>You have no favorite launches yet</Text>;
  }

  return (
    <Stack spacing={4} shouldWrapChildren>
      {favLaunches.map((item) => (
        <FavoriteLaunch
          key={item}
          launchId={item}
          onRemove={() => removeLaunch(item)}
        />
      ))}
    </Stack>
  );
}
