import React from "react";
import { Button, Tooltip } from "@chakra-ui/core";
import { Star } from "react-feather";

export default function StarButton({ onStarClick }) {
  const label = 'Add to favorites';

  return (
    <Button
      variant='ghost'
      size='xs'
    >
      <Tooltip label={label} placement="top" hasArrow>
        <Star
          size={20}
          onClick={onStarClick}
        />
      </Tooltip>
    </Button>
  )
}