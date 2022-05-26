import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip
} from "@chakra-ui/core";
import { Star } from "react-feather";
import FavouriveLaunches from "./favorite-launches";


export default function FavoritesDrawer({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const onDrawerOpen = () => {
    onOpen();
    console.log('opened');
  }

  return (
    <Flex flexDirection='column'>
      <Tooltip label="See favorites" hasArrow>
        <Button
          ref={btnRef}
          colorScheme='teal'
          onClick={onDrawerOpen}
          roundedTop="0"
          alignSelf={'flex-end'}
          position="sticky"
          top={0}
          zIndex={2}
        >
          <Star />
        </Button>
      </Tooltip>
      {children}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent overflow='scroll'>
          <DrawerCloseButton />
          <DrawerHeader>Favorites</DrawerHeader>
          <DrawerBody>
            <Tabs>
              <TabList>
                <Tab>Launches</Tab>
                <Tab>Launch Pads</Tab>
              </TabList>
              <TabPanels pt="4">
                <TabPanel>
                  <FavouriveLaunches />
                </TabPanel>
                <TabPanel>
                  <div style={{ border: '1px solid red', height: 200 }}>hello 2</div>
                  <div style={{ border: '1px solid red', height: 200 }}>jhello</div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}