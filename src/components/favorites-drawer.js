import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/core";


export default function FavoritesDrawer({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const onDrawerOpen = () => {
    onOpen();
    console.log('opened');
  }

  return (
    <Flex flexDirection='column'>
      <Button
        ref={btnRef}
        colorScheme='teal'
        onClick={onDrawerOpen}
        roundedTop="0"
        alignSelf={'flex-end'}
      >
        Favorites
      </Button>
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
            <div style={{ border: '1px solid red', height: 200 }}>jhello</div>
            <div style={{ border: '1px solid red', height: 200 }}>jhello</div>
            <div style={{ border: '1px solid red', height: 200 }}>jhello</div>
            <div style={{ border: '1px solid red', height: 200 }}>jhello</div>
            <div style={{ border: '1px solid red', height: 200 }}>jhello</div>
          </DrawerBody>

          <DrawerFooter>
            drawer footer
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}