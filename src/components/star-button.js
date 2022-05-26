import React from "react";
import { Button, Tooltip } from "@chakra-ui/core";
import { Star } from "react-feather";

export default function StarButton({ onStarClick }) {
  const label = 'Add to favorites';
  return (
    <Tooltip label={label} placement="top" hasArrow>
      <Button
        variant='link'
        size='sm'
      >
        <Star
          size={20}
          onClick={onStarClick}
        />
      </Button>
    </Tooltip>
  )
}