import "./App.css";
import * as React from "react";

// import ConnectMetamask from "./components/ConnectMetamask"
import ConnectSequence from "./components/ConnectSequence.tsx";
import CreateGibble from "./components/CreateGibble"
import Gibble from "./components/Gibble"
import Hero from "./components/Hero";
import Begin from "./components/Begin";

import { Grid, GridItem, HStack, VStack, Link, Spacer } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid templateRows="repeat(1, 200px 1fr)">
        {/* ROW 1 */}
        <GridItem>
          <HStack>
            <Link
              fontSize="32px"
              color="pink.500"
              fontWeight="bold"
              p={4}
              href="./home.js"
              style={{ textDecoration: "none" }}
            >
              Gibble
            </Link>
            <Spacer />
            <ConnectSequence />
          </HStack>
        </GridItem>

        <GridItem>
          {/* ROW 2 */}
          <VStack>
            {/* <Hero /> */}
            {/* <Begin /> */}
            <CreateGibble />
            <Gibble />
          </VStack>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
