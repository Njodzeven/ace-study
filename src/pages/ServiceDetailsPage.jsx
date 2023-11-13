import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ServiceDetails from "../components/ServiceDetails";
import FooterFour from "../components/FooterFour";

const ServiceDetailsPage = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Service Details" />
          <ServiceDetails />
        </main>
        <FooterFour />
      </Suspense>
    </>
  );
};

export default ServiceDetailsPage;
