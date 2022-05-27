import React from "react";
import { Grid, Stat, Text, StatLabel, StatNumber, Link } from "@chakra-ui/core";

export default function RocketSpecs({ rocket }) {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={3}
        mb="4"
      >
        <Stat>
          <StatLabel>Cost per launch</StatLabel>
          <StatNumber>${rocket.cost_per_launch}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Height</StatLabel>
          <StatNumber>{rocket.height.meters} m</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Mass</StatLabel>
          <StatNumber>{rocket.mass.kg} kg</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Landing legs</StatLabel>
          <StatNumber>{rocket.landing_legs.number}</StatNumber>
        </Stat>
      </Grid>
      <Text color="gray.500" fontWeight="bold">
        About
      </Text>
      <Text mb="2">{rocket.description}</Text>
      <Link href={rocket.wikipedia} isExternal>
        <Text color="gray.500" as="u">
          Read more
        </Text>
      </Link>
    </>
  );
}
