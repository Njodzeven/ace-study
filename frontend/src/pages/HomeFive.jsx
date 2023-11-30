import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderFive from "../components/HeaderFive";
import HeroFive from "../components/HeroFive";
import ServiceFive from "../components/ServiceFive";
import HistoryOne from "../components/HistoryOne";
import GalleryThree from "../components/GalleryThree";
import NewsletterTwo from "../components/NewsletterTwo";
import TeamFour from "../components/TeamFour";
import PricingOne from "../components/PricingOne";
import TestimonialTwo from "../components/TestimonialTwo";
import FooterSix from "../components/FooterSix";

const HomeFive = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderFive />
        <main className="digibold-five">
          <HeroFive />
          <ServiceFive />
          <HistoryOne />
          <GalleryThree />
          <NewsletterTwo />
          <TeamFour />
          <PricingOne />
          <TestimonialTwo />
        </main>
        <FooterSix />
      </Suspense>
    </>
  );
};

export default HomeFive;
