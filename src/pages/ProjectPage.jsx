import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ProjectGroup from "../components/ProjectGroup";
import FooterFour from "../components/FooterFour";

const ProjectPage = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderOne />
        <main>
          <Breadcrumb title="Project" />
          <ProjectGroup />
        </main>
        <FooterFour />
      </Suspense>
    </>
  );
};

export default ProjectPage;
