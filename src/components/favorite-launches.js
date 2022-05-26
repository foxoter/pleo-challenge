import { Box } from '@chakra-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { favLaunchesState } from '../atoms';
import { pushOrDeleteItem } from '../utils/general';

export default function FavouriveLaunches() {
	const [favLaunches, setFavLaunches] = useRecoilState(favLaunchesState);

	const onItemClick = (id) => {
		console.log(id);
		const favoritesNew = pushOrDeleteItem([...favLaunches], id);
		setFavLaunches(favoritesNew);
	};

	if (favLaunches.length === 0) {
		return <Box>You have no favorite launches yet</Box>;
	}

	return (
		<>
			{favLaunches.map((item) => (
				<div key={item} onClick={() => onItemClick(item)}>
					{item}
				</div>
			))}
		</>
	);
}
