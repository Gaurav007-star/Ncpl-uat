import Home from "@/components/Home/Home";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NTNL Pvt. Ltd. | Civil & Industrial Projects</title>
        <meta name="description" content="Leading civil construction company, delivering industrial, infrastructure & turnkey projects with quality, safety & on-time execution." />
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
