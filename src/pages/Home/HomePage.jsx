import Home from "@/components/Home/Home";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NTNL</title>
        <meta name="description" content="NTNL is a forward-thinking construction company committed to delivering high-quality, sustainable, and innovative building solutions. With expertise in commercial, residential, and infrastructure projects, NTNL combines modern technology with skilled craftsmanship to create lasting value. Guided by integrity, safety, and excellence, we transform visions into reality while building trust and strong partnerships with every project we undertake." />
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
