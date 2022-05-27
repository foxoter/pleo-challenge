import React, { useState } from "react";
import {
  Button,
  Flex,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";

import { useSpaceXPaginated } from "../utils/use-space-x";
import Breadcrumbs from "./breadcrumbs";
import Error from "./error";
import LoadMoreButton from "./load-more-button";
import RocketItem from "./rocket-item";
import { sortRocketsData } from "../utils/rockets";
import { SORT_BY_KEYS } from "../constants/rockets";

const PAGE_SIZE = 12;

export default function Rockets() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState(SORT_BY_KEYS.date);

  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    "/rockets",
    {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    },
  );
  const rockets = data && sortRocketsData([...data.flat()], sortBy, sortOrder);

  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Rockets" }]} />
      <Flex
        alignItems={["flex-start", "center"]}
        flexDirection={["column", "row"]}
        m={["2", "6"]}
      >
        <RadioGroup
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          isInline
        >
          <Text>Sort by:</Text>
          <Radio value={SORT_BY_KEYS.date}>First launch</Radio>
          <Radio value={SORT_BY_KEYS.cost}>Cost per launch</Radio>
          <Radio value={SORT_BY_KEYS.height}>Height</Radio>
          <Radio value={SORT_BY_KEYS.mass}>Mass</Radio>
        </RadioGroup>
        <Button
          mt={["4", "0"]}
          ml={["0", "4"]}
          onClick={() => setSortOrder(sortOrder === "asc" ? "dsc" : "asc")}
        >
          Reverse sort
        </Button>
      </Flex>
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          rockets
            .flat()
            .map((rocket) => (
              <RocketItem
                rocket={rocket}
                key={rocket.rocket_id}
                higlight={sortBy}
              />
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
