import React from "react";
import {
  useDisclosure,
  Badge,
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tooltip,
} from "@chakra-ui/core";
import RocketSpecs from "./rocket-specs";
import RocketItemHighlight from "./rocket-item-highlight";

export default function RocketItem({ rocket, higlight }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="lg" maxWidth={600}>
          <ModalHeader>{`${rocket.rocket_name} specs`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="4">
            <RocketSpecs rocket={rocket} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        position="relative"
      >
        <Tooltip placement="bottom" label="View specs" hasArrow>
          <Image
            src={rocket.flickr_images[0]}
            alt={`${rocket.rocket_name} rocket`}
            height={["200px", null, "300px"]}
            width="100%"
            objectFit="cover"
            objectPosition="bottom"
            cursor="pointer"
            onClick={onOpen}
          />
        </Tooltip>
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
          <Box mt="1">
            <RocketItemHighlight rocket={rocket} higlight={higlight} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
