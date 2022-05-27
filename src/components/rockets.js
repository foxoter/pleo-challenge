import React, { useState } from "react";
import { Radio, RadioGroup, SimpleGrid, Text } from "@chakra-ui/core";

import { useSpaceXPaginated } from "../utils/use-space-x";
import Breadcrumbs from "./breadcrumbs";
import Error from "./error";
import LoadMoreButton from "./load-more-button";
import RocketItem from "./rocket-item";

const PAGE_SIZE = 12;

export default function Rockets() {
  const [sortBy, setSortBy] = useState("date");
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    "/rockets",
    {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    },
  );
  const rockets = data && [...data.flat()];
  console.log(rockets);

  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Rockets" }]} />
      <RadioGroup
        onChange={(e) => setSortBy(e.target.value)}
        value={sortBy}
        isInline
        m="6"
      >
        <Text>Sort by:</Text>
        <Radio value="date">First launch</Radio>
        <Radio value="cost">Cost per launch</Radio>
        <Radio value="height">Height</Radio>
        <Radio value="mass">Mass</Radio>
      </RadioGroup>
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
