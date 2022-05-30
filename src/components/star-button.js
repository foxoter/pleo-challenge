import React from "react";
import { Button, Tooltip } from "@chakra-ui/core";
import { Star } from "react-feather";

export default function StarButton({ onClick, isStarred }) {
  const label = isStarred ? "Remove from favorites" : "Add to favorites";
  const color = isStarred ? "gold" : "grey";

  return (
    <Button variant="ghost" size="xs" onClick={onClick} data-cy="star-btn">
      <Tooltip label={label} placement="top" hasArrow>
        <Star size={20} stroke={color} fill={color} />
      </Tooltip>
    </Button>
  );
}
