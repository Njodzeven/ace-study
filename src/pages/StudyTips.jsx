import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import StudyTipsOne from "../components/StudyTipsOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";

const StudyTips = () => {
    return (
      <>
        <Suspense fallback={<Preloader />}>
          <main>
            <HeaderOne />
            <Breadcrumb title={"Study Tips"}/>
            <StudyTipsOne/>
          </main>
          <FooterOne />
        </Suspense>
      </>
    );
};
export default StudyTips;
