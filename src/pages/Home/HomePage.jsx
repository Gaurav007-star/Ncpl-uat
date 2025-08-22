import Home from "@/components/Home/Home";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ncpl</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
