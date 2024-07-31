import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Hotels from "./Hotels";
import Restaurants from "./Restaurants";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      < Hotels/>
      <Restaurants />
    </>
  );
}
