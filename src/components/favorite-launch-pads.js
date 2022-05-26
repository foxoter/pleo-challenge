import { Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { favLaunchPadsState } from '../atoms';
import { pushOrDeleteItem } from '../utils/general';
import FavoriteLaunchPad from './favorite-launch-pad';

export default function FavoriteLaunchPads() {
	const [favLaunchPads, setFavLaunchPads] = useRecoilState(favLaunchPadsState);

	const onItemClick = (id) => {
		const favoritesNew = pushOrDeleteItem([...favLaunchPads], id);
		setFavLaunchPads(favoritesNew);
	};

	if (favLaunchPads.length === 0) {
		return <Text>You have no favorite launch pads yet</Text>;
	}

	return (
		<Stack spacing={4} shouldWrapChildren>
			{favLaunchPads.map((item) => (
				// <FavouriteLaunch
				// 	key={item}
				// 	launchId={item}
				// 	onRemove={() => onItemClick(item)}
				// />
				<FavoriteLaunchPad key={item} launchPadId={item} />
			))}
		</Stack>
	);
}
