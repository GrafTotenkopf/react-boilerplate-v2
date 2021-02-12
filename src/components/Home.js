import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Layout from "./Layout";

import { text } from "./home.css";

const Home = () => {
  return (
    <Layout>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Link to="/dynamic">Navigate to Dynamic Page</Link>
            <p className={text}>Hello</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;
