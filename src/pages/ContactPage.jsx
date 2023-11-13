import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";
import FooterFour from "../components/FooterFour";

const ContactPage = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Contact" />
          <Contact />
        </main>
        <FooterFour />
      </Suspense>
    </>
  );
};

export default ContactPage;
