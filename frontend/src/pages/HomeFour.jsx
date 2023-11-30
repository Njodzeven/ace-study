import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderFour from "../components/HeaderFour";
import HeroFour from "../components/HeroFour";
import TextSliderFour from "../components/TextSliderFour";
import AboutFive from "../components/AboutFive";
import ServiceFour from "../components/ServiceFour";
import WorkProcessThree from "../components/WorkProcessThree";
import CounterFive from "../components/CounterFive";
import PortfolioOne from "../components/PortfolioOne";
import BlogFour from "../components/BlogFour";
import ContactThree from "../components/ContactThree";
import BrandThree from "../components/BrandThree";
import FooterFive from "../components/FooterFive";

const HomeFour = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderFour />
        <main>
          <HeroFour />
          <TextSliderFour />
          <AboutFive />
          <ServiceFour />
          <WorkProcessThree />
          <CounterFive />
          <PortfolioOne />
          <BlogFour />
          <ContactThree />
          <BrandThree />
        </main>
        <FooterFive />
      </Suspense>
    </>
  );
};

export default HomeFour;
