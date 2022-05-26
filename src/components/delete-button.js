import React from 'react';
import { Button } from '@chakra-ui/core';
import { Trash2 } from 'react-feather';

export default function DeleteButton({ onRemove }) {
	return (
		<Button variant="ghost" size="xs">
			<Trash2 size={20} onClick={onRemove} stroke="grey" />
		</Button>
	);
}
