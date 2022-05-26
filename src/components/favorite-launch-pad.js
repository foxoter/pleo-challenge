import { Box, Flex, Spinner, Text, Badge } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpaceX } from '../utils/use-space-x';
import Error from './error';
import { format as timeAgo } from 'timeago.js';
import { formatDate } from '../utils/format-date';
import DeleteButton from './delete-button';

export default function FavoriteLaunchPad({ launchPadId, onRemove }) {
	const { data: launchPad, error } = useSpaceX(`/launchpads/${launchPadId}`);
  console.log(launchPad)

	if (error) return <Error />;
	if (!launchPad) {
		return (
			<Flex justifyContent="center" alignItems="center" minHeight="50vh">
				<Spinner size="lg" />
			</Flex>
		);
	}

	return (
		<Box
			boxShadow="md"
			borderWidth="1px"
			rounded="lg"
			overflow="hidden"
			position="relative"
		>
			<Box p="2">
				<Box>
					{launchPad.status === 'active' ? (
						<Badge px="2" variant="solid" variantColor="green">
							Active
						</Badge>
					) : (
						<Badge px="2" variant="solid" variantColor="red">
							Retired
						</Badge>
					)}
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						mt="1"
					>
						{launchPad.attempted_launches} attempted &bull;{' '}
						{launchPad.successful_launches} succeeded
					</Box>
				</Box>

				<Link to={`/launch-pads/${launchPad.site_id}`}>
					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
					>
						{launchPad.name}
					</Box>
					<Text color="gray.500" fontSize="sm">
						{launchPad.vehicles_launched.join(', ')}
					</Text>
				</Link>
			</Box>
		</Box>
	);
}
