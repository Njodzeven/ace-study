import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import HeroOne from "../components/HeroOne";
import AboutOne from "../components/AboutOne";
import ServiceOne from "../components/ServiceOne";
import CounterOne from "../components/CounterOne";
import FaqOne from "../components/FaqOne";
import TeamOne from "../components/TeamOne";
import NewsletterOne from "../components/NewsletterOne";
import WhoWeAreOne from "../components/WhoWeAreOne";
import TextSliderOne from "../components/TextSliderOne";
import BlogOne from "../components/BlogOne";
import ContactOne from "../components/ContactOne";
import BrandOne from "../components/BrandOne";
import FooterOne from "../components/FooterOne";

const HomeOne = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <HeroOne />
          <AboutOne />
          <ServiceOne />
          <WhoWeAreOne />
        </main>
        <FooterOne />
      </Suspense>
    </>
  );
};

export default HomeOne;
