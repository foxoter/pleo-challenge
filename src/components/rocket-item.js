import React from "react";
import {
  useDisclosure,
  Badge,
  Box,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import { format as timeAgo } from "timeago.js";
import { formatDate } from "../utils/format-date";
import RocketSpecs from "./rocket-specs";

export default function RocketItem({ rocket }) {
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
    </>
  );
}
