import { Badge, Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/core";
import React from "react";
import { format as timeAgo } from "timeago.js";
import { formatDate } from "../utils/format-date";
import { useSpaceXPaginated } from "../utils/use-space-x";
import Breadcrumbs from "./breadcrumbs";
import Error from "./error";
import LoadMoreButton from "./load-more-button";

const PAGE_SIZE = 12;

export default function Rockets() {
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    "/rockets",
    {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    },
  );

  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Rockets" }]} />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .map((rocket) => (
              <RocketItem rocket={rocket} key={rocket.rocket_id} />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
}

export function RocketItem({ rocket }) {
  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={rocket.flickr_images[0]}
        alt={`${rocket.rocket_name} rocket`}
        height={["200px", null, "300px"]}
        width="100%"
        objectFit="cover"
        objectPosition="bottom"
      />

      <Box p="6">
        <Box d="flex" alignItems="center">
          {rocket.active ? (
            <Badge px="2" variant="solid" variantColor="green">
              Active
            </Badge>
          ) : (
            <Badge px="2" variant="solid" variantColor="red">
              Retired
            </Badge>
          )}
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {`Success rate: ${rocket.success_rate_pct}%`}
          </Text>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {rocket.rocket_name}
        </Box>
        <Flex>
          <Text fontSize="sm">{formatDate(rocket.first_flight)}</Text>
          <Text color="gray.500" ml="2" fontSize="sm">
            {timeAgo(rocket.first_flight)}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
