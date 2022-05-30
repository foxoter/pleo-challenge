import React from "react";
import { Stack, Text } from "@chakra-ui/core";

import { useFavoriteLaunches } from "../hooks/useFavoriteLaunches";
import FavoriteLaunch from "./favorite-launch";

export default function FavoriteLaunches() {
  const { removeLaunch, favLaunchIds } = useFavoriteLaunches();

  if (favLaunchIds.length === 0) {
    return <Text>You have no favorite launches yet</Text>;
  }

  const handleRemove = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    removeLaunch(id);
  };

  return (
    <Stack spacing={4} shouldWrapChildren>
      {favLaunchIds.map((id) => (
        <FavoriteLaunch
          key={id}
          launchId={id}
          onRemove={(e) => handleRemove(e, id)}
        />
      ))}
    </Stack>
  );
}
