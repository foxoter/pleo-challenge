import React from "react";
import { Button } from "@chakra-ui/core";
import { Trash2 } from "react-feather";

export default function DeleteButton({ onClick }) {
  return (
    <Button variant="ghost" size="xs" onClick={onClick}>
      <Trash2 size={20} stroke="grey" />
    </Button>
  );
}
