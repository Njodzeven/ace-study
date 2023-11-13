import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderTwo from "../components/HeaderTwo";
import HeroTwo from "../components/HeroTwo";
import TextSliderThree from "../components/TextSliderThree";
import AboutThree from "../components/AboutThree";
import ServiceTwo from "../components/ServiceTwo";
import CounterThree from "../components/CounterThree";
import GalleryOne from "../components/GalleryOne";
import TeamTwo from "../components/TeamTwo";
import WorkProcessOne from "../components/WorkProcessOne";
import TextSliderTwo from "../components/TextSliderTwo";
import BlogTwo from "../components/BlogTwo";
import ContactTwo from "../components/ContactTwo";
import FooterTwo from "../components/FooterTwo";

const HomeTwo = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderTwo />
        <main>
          <HeroTwo />
          <TextSliderThree />
          <AboutThree />
          <ServiceTwo />
          <CounterThree />
          <GalleryOne />
          <TeamTwo />
          <WorkProcessOne />
          <TextSliderTwo />
          <BlogTwo />
          <ContactTwo />
        </main>
        <FooterTwo />
      </Suspense>
    </>
  );
};

export default HomeTwo;
