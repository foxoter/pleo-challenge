import React from "react";
import { SimpleGrid } from "@chakra-ui/core";

import { useSpaceXPaginated } from "../utils/use-space-x";
import Breadcrumbs from "./breadcrumbs";
import Error from "./error";
import LoadMoreButton from "./load-more-button";
import RocketItem from "./rocket-item";

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
