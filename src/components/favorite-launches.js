import { Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { favLaunchesState } from '../atoms';
import { pushOrDeleteItem } from '../utils/general';
import FavouriteLaunch from './favorite-launch';

export default function FavouriveLaunches() {
	const [favLaunches, setFavLaunches] = useRecoilState(favLaunchesState);

	const onItemClick = (id) => {
		const favoritesNew = pushOrDeleteItem([...favLaunches], id);
		setFavLaunches(favoritesNew);
	};

	if (favLaunches.length === 0) {
		return <Text>You have no favorite launches yet</Text>;
	}

	return (
		<Stack spacing={4} shouldWrapChildren>
			{favLaunches.map((item) => (
				<FavouriteLaunch
					key={item}
					launchId={item}
					onRemove={() => onItemClick(item)}
				/>
			))}
		</Stack>
	);
}
