import React from "react";
import { Grid, Stat, Text, StatLabel, StatNumber, Link } from "@chakra-ui/core";
import {
  formatLength,
  formatPrice,
  formatWeight,
} from "../utils/format-number";

export default function RocketSpecs({ rocket }) {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={3}
        mb="4"
      >
        <Stat>
          <StatLabel>Cost per launch</StatLabel>
          <StatNumber>{formatPrice(rocket.cost_per_launch)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Height</StatLabel>
          <StatNumber>{formatLength(rocket.height.meters)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Diameter</StatLabel>
          <StatNumber>{formatLength(rocket.diameter.meters)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Mass</StatLabel>
          <StatNumber>{formatWeight(rocket.mass.kg)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Stages</StatLabel>
          <StatNumber>{rocket.stages}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Landing legs</StatLabel>
          <StatNumber>{rocket.landing_legs.number}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Engines</StatLabel>
          <StatNumber>{rocket.engines.number}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Engine type</StatLabel>
          <StatNumber textTransform="uppercase">
            {rocket.engines.type}
          </StatNumber>
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
