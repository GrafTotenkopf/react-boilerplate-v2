import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import { h1 } from "./layout.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          react-starter-boilerplate
        </Header>
      </Link>
      {children}
    </Container>
  );
};

export default Layout;
