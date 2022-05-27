import React from "react";
import { Button } from "@chakra-ui/core";
import { Trash2 } from "react-feather";

export default function DeleteButton({ onRemove }) {
  return (
    <Button variant="ghost" size="xs" onClick={onRemove}>
      <Trash2 size={20} stroke="grey" />
    </Button>
  );
}
