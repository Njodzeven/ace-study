import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ProjectDetails from "../components/ProjectDetails";
import FooterFour from "../components/FooterFour";

const ProjectDetailsPage = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Project Details" />
          <ProjectDetails />
        </main>
        <FooterFour />
      </Suspense>
    </>
  );
};

export default ProjectDetailsPage;
