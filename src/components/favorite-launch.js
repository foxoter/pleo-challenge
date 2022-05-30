import React from "react";
import { Box, Flex, Spinner, Text, Badge } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useSpaceX } from "../utils/use-space-x";
import Error from "./error";
import { format as timeAgo } from "timeago.js";
import { formatDate } from "../utils/format-date";
import DeleteButton from "./delete-button";

export default function FavoriteLaunch({ launchId, onRemove }) {
  const { data: launch, error } = useSpaceX(`/launches/${launchId}`);

  if (error) return <Error />;
  if (!launch) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="50vh">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Box
      as={Link}
      to={`/launches/${launchId.toString()}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
      display="block"
      data-cy="fav-launch"
    >
      <Flex
        bgImage={`url(${
          launch.links.flickr_images[0]?.replace("_o.jpg", "_z.jpg") ??
          launch.links.mission_patch_small
        })`}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={100}
        p={2}
        alignItems="flex-end"
        justifyContent="space-between"
      >
        {launch.launch_success ? (
          <Badge variantColor="green" fontSize="sm">
            Successful
          </Badge>
        ) : (
          <Badge variantColor="red" fontSize="sm">
            Failed
          </Badge>
        )}
      </Flex>
      <Box p="2">
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {launch.rocket.rocket_name} &bull; {launch.launch_site.site_name}
        </Box>
        <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {launch.mission_name}
        </Box>
        <Box>
          <Text fontSize="sm">{formatDate(launch.launch_date_utc)} </Text>
          <Text color="gray.500" fontSize="sm">
            {timeAgo(launch.launch_date_utc)}
          </Text>
        </Box>
      </Box>
      <Box position="absolute" bottom="0.5rem" right="0.5rem">
        <DeleteButton onClick={onRemove} />
      </Box>
    </Box>
  );
}
