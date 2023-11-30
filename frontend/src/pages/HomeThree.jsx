import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import HeroThree from "../components/HeroThree";
import AboutFour from "../components/AboutFour";
import ServiceThree from "../components/ServiceThree";
import GalleryTwo from "../components/GalleryTwo";
import CounterFour from "../components/CounterFour";
import WorkProcessTwo from "../components/WorkProcessTwo";
import TestimonialOne from "../components/TestimonialOne";
import TeamThree from "../components/TeamThree";
import FaqTwo from "../components/FaqTwo";
import BlogThree from "../components/BlogThree";
import FooterThree from "../components/FooterThree";

const HomeThree = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main>
          <HeroThree />
          <AboutFour />
          <ServiceThree />
          <GalleryTwo />
          <CounterFour />
          <WorkProcessTwo />
          <TestimonialOne />
          <TeamThree />
          <FaqTwo />
          <BlogThree />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default HomeThree;
