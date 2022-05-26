import React from "react";
import { Button, Tooltip } from "@chakra-ui/core";
import { Star } from "react-feather";

export default function StarButton({ onStarClick, active }) {
  const label = active ? 'Remove from favorites' : 'Add to favorites';
  const color = active ? 'gold' : 'grey';

  return (
    <Button
      variant='ghost'
      size='xs'
    >
      <Tooltip label={label} placement="top" hasArrow>
        <Star
          size={20}
          onClick={onStarClick}
          stroke={color}
          fill={color}
        />
      </Tooltip>
    </Button>
  )
}