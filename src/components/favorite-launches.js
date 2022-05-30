import React from "react";
import { Stack, Text } from "@chakra-ui/core";

import { useFavoriteLaunches } from "../hooks/useFavoriteLaunches";
import FavoriteLaunch from "./favorite-launch";

export default function FavoriteLaunches() {
  const { removeLaunch, favLaunchIds } = useFavoriteLaunches();

  if (favLaunchIds.length === 0) {
    return <Text>You have no favorite launches yet</Text>;
  }

  return (
    <Stack spacing={4} shouldWrapChildren>
      {favLaunchIds.map((id) => (
        <FavoriteLaunch
          key={id}
          launchId={id}
          onRemove={() => removeLaunch(id)}
        />
      ))}
    </Stack>
  );
}
