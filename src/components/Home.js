import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { text } from "./Home.css";

import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <p className={text}>Hello World</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;
