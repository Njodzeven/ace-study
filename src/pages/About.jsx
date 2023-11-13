import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutTwo from "../components/AboutTwo";
import CounterTwo from "../components/CounterTwo";
import WhoWeAreTwo from "../components/WhoWeAreTwo";
import TextSliderOne from "../components/TextSliderOne";
import BrandTwo from "../components/BrandTwo";
import FooterOne from "../components/FooterOne";

const About = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Study Tips" />
          <AboutTwo />
          <CounterTwo />
          <WhoWeAreTwo />
          <TextSliderOne />
          <BrandTwo />
        </main>
        <FooterOne />
      </Suspense>
    </>
  );
};

export default About;
