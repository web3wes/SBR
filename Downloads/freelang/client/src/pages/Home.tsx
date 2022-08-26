import React, { useState, useContext } from "react";
import { Button, Icon, Flex, Heading, Box } from "@chakra-ui/react";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext, logout } from "src/utils/auth";
import { GET_USER, GET_WORDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Loading } from "src/components/Loading";

export default function Home() {
  const { updateToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const logUserOut = () => {
    logout();
    updateToken(null);
    navigate("/log-in");
  };
  const [user, setUser] = useState("");
  const [wordo, setWordo] = useState("");

  const [words, setWords] = React.useState<
    Array<{
      word: string;
      defintion: string;
      wordNumber: string;
    }>
  >([]);

  useQuery(GET_USER, {
    onCompleted: (data) => {
      setUser(data.currentUser.id);
    },
  });

  const { loading } = useQuery(GET_WORDS, {
    onCompleted: (data) => {
      console.log(data.freqWords);
      setWords(data.freqWords);
      setWordo("wordo");
    },
  });

  const http = decodeURIComponent(
    JSON.parse('"http\\u00253A\\u00252F\\u00252Fexample.com"')
  );

  const wordList = words.map((number) => (
    <li>
      {number.defintion} , {number.wordNumber},
      {decodeURIComponent(JSON.parse(`${number.Word}`))}
    </li>
  ));

  if (loading) {
    return (
      // <Center mt={100}>
      <Loading />
      // </Center>
    );
  } else
    return (
      <Box>
        {/* {console.log(words)} */}

        <Flex direction="column" alignItems="start">
          <Button alignSelf={"end"} onClick={() => logUserOut()}>
            <Icon as={RiLogoutBoxRFill} mr={1} />
            Sign Out
          </Button>

          <ul>{wordList}</ul>
          <ul>{http}</ul>
          {/* {words?.map((name: any) => { */}
        </Flex>
      </Box>
    );
}
