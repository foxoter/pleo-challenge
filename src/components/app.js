import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/core";
import { RecoilRoot } from "recoil";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavoritesDrawer from "./favorites-drawer";
import Rockets from "./rockets";

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <NavBar />
        <FavoritesDrawer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launches/:launchId" element={<Launch />} />
            <Route path="/launch-pads" element={<LaunchPads />} />
            <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
            <Route path="/rockets" element={<Rockets />} />
          </Routes>
        </FavoritesDrawer>
      </RecoilRoot>
    </div>
  );
}

function NavBar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
    </Flex>
  );
}
