import React from "react";
import { Flex, FlexProps, Spinner } from "@chakra-ui/react";

export function Loading(props: FlexProps): JSX.Element {
  return (
    <Flex align="center" justify="center" {...props}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="current"
        size="xl"
      />
    </Flex>
  );
}

export default Loading;
