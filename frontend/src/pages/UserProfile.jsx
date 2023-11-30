import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutTwo from "../components/AboutTwo";
import CounterTwo from "../components/CounterTwo";
import WhoWeAreTwo from "../components/WhoWeAreTwo";
import TextSliderOne from "../components/TextSliderOne";
import BrandTwo from "../components/BrandTwo";
import FooterFour from "../components/FooterFour";
import UserProfileOne from "../components/UserProfileOne";
import FooterOne from "../components/FooterOne";

const UserProfile = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="User Profile" />
          <UserProfileOne/>
        </main>
        <FooterOne />
      </Suspense>
    </>
  );
};

export default UserProfile;
