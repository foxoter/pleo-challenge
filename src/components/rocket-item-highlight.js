import React from "react";
import { format as timeAgo } from "timeago.js";
import { Badge, Stack, Text } from "@chakra-ui/core";
import { SORT_BY_KEYS } from "../constants/rockets";
import {
  formatLength,
  formatPrice,
  formatWeight,
} from "../utils/format-number";
import { formatDate } from "../utils/format-date";

export default function RocketItemHighlight({ higlight, rocket }) {
  let text;
  let badge;
  let caption;
  switch (higlight) {
    case SORT_BY_KEYS.date:
      text = "First launch:";
      badge = formatDate(rocket.first_flight);
      caption = timeAgo(rocket.first_flight);
      break;
    case SORT_BY_KEYS.cost:
      text = "Cost per launch:";
      badge = formatPrice(rocket.cost_per_launch);
      break;
    case SORT_BY_KEYS.height:
      text = "Height:";
      badge = formatLength(rocket.height.meters);
      break;
    case SORT_BY_KEYS.mass:
      text = "Mass:";
      badge = formatWeight(rocket.mass.kg);
      break;
    default:
      text = "First launch:";
      badge = formatDate(rocket.first_flight);
      caption = timeAgo(rocket.first_flight);
  }

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
